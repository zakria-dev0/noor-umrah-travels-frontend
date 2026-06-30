export const useAuth = () => {
  const token =
    localStorage.getItem("adminToken");

  return {
    isAuthenticated: !!token,
    token,
  };
};