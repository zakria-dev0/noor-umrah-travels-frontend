import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";
import { getCustomerById, updateCustomer } from "../services/customerService";

const FIELDS = [
  { name: "firstName",  label: "First Name",    required: true },
  { name: "lastName",   label: "Last Name",     required: true },
  { name: "email",      label: "Email Address", required: true },
  { name: "phone",      label: "Phone",         required: true },
  { name: "address1",   label: "Address Line 1" },
  { name: "city",       label: "City" },
  { name: "state",      label: "State" },
  { name: "zipCode",    label: "Zip Code" },
  { name: "country",    label: "Country" },
];

export default function CustomerDetails() {
  const { id }    = useParams();
  const navigate  = useNavigate();

  const [loading, setLoading] = useState(true);
  const [saving,  setSaving]  = useState(false);
  const [form,    setForm]    = useState<Record<string, string>>({});

  useEffect(() => { load(); }, []);

  const load = async () => {
    try {
      const res = await getCustomerById(id!);
      if (res.success) setForm(res.data);
    } catch {
      toast.error("Failed to load customer.");
    } finally {
      setLoading(false);
    }
  };

  const set = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSave = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSaving(true);
    try {
      const res = await updateCustomer(id!, form);
      if (res.success) {
        toast.success("Customer updated successfully.");
      } else {
        toast.error(res.message || "Failed to update customer.");
      }
    } catch {
      toast.error("Something went wrong.");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <svg className="w-5 h-5 animate-spin text-gray-900" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-20" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-80" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
        </svg>
      </div>
    );
  }

  return (
    <div className="max-w-2xl space-y-4">

      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Customer Details</h1>
          <p className="text-sm text-gray-400 mt-0.5">
            {form.firstName} {form.lastName}
          </p>
        </div>
        <button
          onClick={() => navigate(-1)}
          className="px-4 py-2 text-sm font-medium border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
        >
          ← Back
        </button>
      </div>

      {/* Form */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-100">
          <h2 className="text-sm font-bold text-gray-900">Edit Information</h2>
          <p className="text-xs text-gray-400 mt-0.5">Update the customer's details below</p>
        </div>

        <form onSubmit={handleSave} className="p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {FIELDS.map(({ name, label, required }) => (
              <div key={name}>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
                  {label} {required && <span className="text-red-500">*</span>}
                </label>
                <input
                  required={required}
                  value={(form as any)[name] ?? ""}
                  onChange={set(name)}
                  placeholder={label}
                  className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                />
              </div>
            ))}
          </div>

          <div className="flex justify-end gap-2 pt-6">
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="px-4 py-2 text-sm font-medium border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={saving}
              className="px-5 py-2 text-sm font-medium bg-gray-900 text-white rounded-lg hover:bg-gray-700 disabled:opacity-50 transition-colors"
            >
              {saving ? "Saving..." : "Save Changes"}
            </button>
          </div>
        </form>
      </div>

    </div>
  );
}
