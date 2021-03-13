exports.getLocalToken = () => {
  const token = localStorage.getItem("token");
  return token;
};
