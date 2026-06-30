const API =
  process.env.REACT_APP_API_URL;

const token = () =>
  localStorage.getItem("adminToken");

export const getPayments =
  async () => {
    const response =
      await fetch(
        `${API}/api/admin/payments`,
        {
          headers: {
            Authorization:
              `Bearer ${token()}`
          }
        }
      );

    return response.json();
  };