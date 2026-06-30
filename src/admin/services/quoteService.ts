const API =
  process.env.REACT_APP_API_URL;

const token = () =>
  localStorage.getItem("adminToken");

export const getQuotes =
  async (
    page = 1,
    search = ""
  ) => {
    const response =
      await fetch(
        `${API}/api/admin/quotes?page=${page}&search=${search}`,
        {
          headers: {
            Authorization: `Bearer ${token()}`
          }
        }
      );

    return response.json();
  };

export const createQuote =
  async (data: any) => {
    const response =
      await fetch(
        `${API}/api/admin/quotes`,
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",

            Authorization:
              `Bearer ${token()}`
          },

          body:
            JSON.stringify(data)
        }
      );

    return response.json();
  };

export const sendQuoteEmail =
  async (id: string) => {
    const response =
      await fetch(
        `${API}/api/admin/quotes/${id}/send-email`,
        {
          method: "POST",

          headers: {
            Authorization:
              `Bearer ${token()}`
          }
        }
      );

    return response.json();
  };

export const sendWhatsAppQuote =
  async (id: string) => {
    const response =
      await fetch(
        `${API}/api/admin/quotes/${id}/send-whatsapp`,
        {
          method: "POST",

          headers: {
            Authorization:
              `Bearer ${token()}`
          }
        }
      );

    return response.json();
  };

export const getQuoteById = async (id: string) => {
  const response = await fetch(`${API}/api/admin/quotes/${id}`, {
    headers: { Authorization: `Bearer ${token()}` },
  });
  return response.json();
};

export const updateQuote = async (id: string, data: any) => {
  const response = await fetch(`${API}/api/admin/quotes/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token()}`,
    },
    body: JSON.stringify(data),
  });
  return response.json();
};