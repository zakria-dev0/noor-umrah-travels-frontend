const API =
  process.env.REACT_APP_API_URL;

const token = () =>
  localStorage.getItem("adminToken");

export const getCustomers =
  async (
    page = 1,
    search = ""
  ) => {
    const response =
      await fetch(
        `${API}/api/admin/customers?page=${page}&search=${search}`,
        {
          headers: {
            Authorization: `Bearer ${token()}`,
          },
        }
      );

    return response.json();
  };

export const createCustomer =
  async (data: any) => {
    const response =
      await fetch(
        `${API}/api/admin/customers`,
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",

            Authorization: `Bearer ${token()}`,
          },

          body: JSON.stringify(
            data
          ),
        }
      );

    return response.json();
  };

export const getCustomerById = async (id: string) => {
  const response = await fetch(`${API}/api/admin/customers/${id}`, {
    headers: { Authorization: `Bearer ${token()}` },
  });
  return response.json();
};

export const updateCustomer = async (id: string, data: any) => {
  const response = await fetch(`${API}/api/admin/customers/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token()}`,
    },
    body: JSON.stringify(data),
  });
  return response.json();
};

export const deleteCustomer =
  async (id: string) => {
    const response =
      await fetch(
        `${API}/api/admin/customers/${id}`,
        {
          method: "DELETE",

          headers: {
            Authorization: `Bearer ${token()}`,
          },
        }
      );

    return response.json();
  };