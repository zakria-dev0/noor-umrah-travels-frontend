const API_URL =
  process.env.REACT_APP_API_URL ||
  "http://localhost:5001";

export const apiFetch = async (
  endpoint: string,
  options: RequestInit = {}
) => {
  const token =
    localStorage.getItem("adminToken");

  const response = await fetch(
    `${API_URL}${endpoint}`,
    {
      ...options,

      headers: {
        "Content-Type":
          "application/json",

        ...(token && {
          Authorization: `Bearer ${token}`,
        }),

        ...options.headers,
      },
    }
  );

  const data =
    await response.json();

  if (!response.ok) {
    throw new Error(
      data.message ||
        "Something went wrong"
    );
  }

  return data;
};