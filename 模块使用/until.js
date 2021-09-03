const TOKEN = "token";
const getToken = () => {
  return window.localStorage.getItem(TOKEN);
};

export { getToken };
