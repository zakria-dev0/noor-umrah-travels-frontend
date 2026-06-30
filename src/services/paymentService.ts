const API =
  process.env.REACT_APP_API_URL;

export const startCheckout =
  async (
    quoteNumber: string
  ) => {
    const response =
      await fetch(
        `${API}/api/payments/checkout/${quoteNumber}`,
        {
          method: "POST",
        }
      );

    return response.json();
  };

export const authorizeAffirm =
  async (
    paymentId: string,
    checkoutToken: string
  ) => {
    const response =
      await fetch(
        `${API}/api/payments/affirm/authorize`,
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify({
            paymentId,
            checkoutToken,
          }),
        }
      );

    return response.json();
  };