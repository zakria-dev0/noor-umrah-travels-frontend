const API = process.env.REACT_APP_API_URL;

export const getQuoteByNumber = async (
  quoteNumber: string
) => {
  const response = await fetch(
    `${API}/api/public/quotes/${quoteNumber}`
  );

  return response.json();
};