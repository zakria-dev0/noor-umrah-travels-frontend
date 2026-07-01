import {
  useEffect,
  useState,
} from "react";

import {
  useNavigate,
} from "react-router-dom";

import toast from "react-hot-toast";

import {
  createQuote,
} from "../services/quoteService";

const API =
  process.env.REACT_APP_API_URL;

const token = () =>
  localStorage.getItem(
    "adminToken"
  );

interface Customer {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

export default function CreateQuote() {
  const navigate =
    useNavigate();

  const [
    customers,
    setCustomers,
  ] = useState<
    Customer[]
  >([]);

  const [
    loadingCustomers,
    setLoadingCustomers,
  ] = useState(false);

  const [
    saving,
    setSaving,
  ] = useState(false);

  const [
    errors,
    setErrors,
  ] = useState<any>({});

  const [form, setForm] =
    useState({
      customer: "",

      packageName: "",

      travelers: 1,

      amount: "",

      currency: "USD",

      expiresAt: "",

      notes: "",
    });

  const loadCustomers =
    async () => {
      try {
        setLoadingCustomers(
          true
        );

        const response =
          await fetch(
            `${API}/api/admin/customers?page=1&search=`,
            {
              headers: {
                Authorization: `Bearer ${token()}`,
              },
            }
          );

        const data =
          await response.json();

        setCustomers(
          data.data || []
        );
      } catch (err) {
        console.log(err);
      } finally {
        setLoadingCustomers(
          false
        );
      }
    };

  useEffect(() => {
    loadCustomers();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement |
      HTMLSelectElement |
      HTMLTextAreaElement
    >
  ) => {

    setForm({
      ...form,

      [e.target.name]:
        e.target.value,
    });

    setErrors({
      ...errors,

      [e.target.name]:
        "",
    });
  };

  const validate =
    () => {

      const newErrors: any =
        {};

      if (!form.customer)
        newErrors.customer =
          "Customer is required";

      if (
        !form.packageName
      )
        newErrors.packageName =
          "Package Name is required";

      if (!form.amount)
        newErrors.amount =
          "Amount is required";

      else if (
        Number(form.amount) <
        100
      )
        newErrors.amount =
          "Amount must be at least 100 (Affirm rejects smaller payments)";

      if (
        Number(
          form.travelers
        ) <= 0
      )
        newErrors.travelers =
          "Invalid travelers";

      if (
        !form.expiresAt
      )
        newErrors.expiresAt =
          "Expiry Date required";

      setErrors(
        newErrors
      );

      const firstError =
        Object.values(
          newErrors
        )[0] as
          | string
          | undefined;

      if (firstError)
        toast.error(
          firstError
        );

      return (
        Object.keys(
          newErrors
        ).length === 0
      );
    };

  const handleSubmit =
    async (
      e: React.FormEvent
    ) => {

      e.preventDefault();

      if (
        !validate()
      )
        return;

      try {

        setSaving(
          true
        );

        const response =
          await createQuote(
            {
              ...form,

              travelers:
                Number(
                  form.travelers
                ),

              amount:
                Number(
                  form.amount
                ),
            }
          );

        if (
          response.success
        ) {

          toast.success("Quote created successfully.");

          navigate(
            "/admin/quotes"
          );

        } else {

          toast.error(response.message || "Failed to create quote.");

        }

      } catch (err) {

        console.log(
          err
        );

        toast.error("Something went wrong.");

      } finally {

        setSaving(
          false
        );

      }
    };

return (
  <div className="max-w-5xl mx-auto">

    <div className="bg-white rounded-lg shadow">

      {/* Header */}

      <div className="border-b px-6 py-5">

        <h1 className="text-2xl font-bold">
          Create New Quote
        </h1>

        <p className="text-gray-500 mt-1">
          Create a new Umrah quote for a customer.
        </p>

      </div>

      <form
        onSubmit={handleSubmit}
        noValidate
        className="p-6 space-y-6"
      >

        {/* Customer */}

        <div>

          <label className="block mb-2 font-medium">

            Customer *

          </label>

          <select
            name="customer"
            value={form.customer}
            onChange={handleChange}
            disabled={loadingCustomers}
            className="w-full border rounded-lg p-3"
          >

            <option value="">
              Select Customer
            </option>

            {customers.map((customer) => (

              <option
                key={customer._id}
                value={customer._id}
              >

                {customer.firstName}{" "}
                {customer.lastName}
                {" - "}
                {customer.email}

              </option>

            ))}

          </select>

          {errors.customer && (

            <p className="text-red-500 text-sm mt-1">

              {errors.customer}

            </p>

          )}

        </div>

        {/* Package */}

        <div>

          <label className="block mb-2 font-medium">

            Package Name *

          </label>

          <input
            type="text"
            name="packageName"
            value={form.packageName}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
            placeholder="Luxury Umrah Package"
          />

          {errors.packageName && (

            <p className="text-red-500 text-sm mt-1">

              {errors.packageName}

            </p>

          )}

        </div>

        {/* Travelers */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <div>

            <label className="block mb-2 font-medium">

              Travelers *

            </label>

            <input
              type="number"
              name="travelers"
              min="1"
              value={form.travelers}
              onChange={handleChange}
              className="w-full border rounded-lg p-3"
            />

            {errors.travelers && (

              <p className="text-red-500 text-sm mt-1">

                {errors.travelers}

              </p>

            )}

          </div>

          <div>

            <label className="block mb-2 font-medium">

              Total Amount *

            </label>

            <input
              type="number"
              name="amount"
              min="100"
              value={form.amount}
              onChange={handleChange}
              className="w-full border rounded-lg p-3"
              placeholder="2500"
            />

            {errors.amount && (

              <p className="text-red-500 text-sm mt-1">

                {errors.amount}

              </p>

            )}

          </div>

        </div>

        {/* Currency & Expiry */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <div>

            <label className="block mb-2 font-medium">

              Currency

            </label>

            <select
              name="currency"
              value={form.currency}
              onChange={handleChange}
              className="w-full border rounded-lg p-3"
            >

              <option value="USD">

                USD

              </option>

              <option value="SAR">

                SAR

              </option>

              <option value="PKR">

                PKR

              </option>

            </select>

          </div>

          <div>

            <label className="block mb-2 font-medium">

              Expiry Date *

            </label>

            <input
              type="date"
              name="expiresAt"
              value={form.expiresAt}
              onChange={handleChange}
              className="w-full border rounded-lg p-3"
            />

            {errors.expiresAt && (

              <p className="text-red-500 text-sm mt-1">

                {errors.expiresAt}

              </p>

            )}

          </div>

        </div>

        {/* Notes */}

        <div>

          <label className="block mb-2 font-medium">

            Notes

          </label>

          <textarea
            rows={5}
            name="notes"
            value={form.notes}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
            placeholder="Additional information..."
          />

        </div>

        {/* Summary */}

        <div className="rounded-lg border bg-gray-50 p-5">

          <h3 className="font-semibold text-lg mb-4">

            Quote Summary

          </h3>

          <div className="grid grid-cols-2 gap-3">

            <div>

              Package

            </div>

            <div className="font-medium">

              {form.packageName || "-"}

            </div>

            <div>

              Travelers

            </div>

            <div className="font-medium">

              {form.travelers}

            </div>

            <div>

              Currency

            </div>

            <div className="font-medium">

              {form.currency}

            </div>

            <div>

              Total

            </div>

            <div className="font-bold text-lg">

              {form.currency} {form.amount || "0"}

            </div>

          </div>

        </div>

        {/* Buttons */}

        <div className="flex justify-end gap-4">

          <button
            type="button"
            onClick={() => navigate("/admin/quotes")}
            className="px-6 py-3 border rounded-lg"
          >

            Cancel

          </button>

          <button
            type="submit"
            disabled={saving}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg"
          >

            {saving
              ? "Creating Quote..."
              : "Create Quote"}

          </button>

        </div>

      </form>

    </div>

  </div>
);
}