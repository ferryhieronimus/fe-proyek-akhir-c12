import axios from "axios";
const baseUrl = "http://localhost:8080/api/v1/auth/user";

let token = null;

const setToken = (newToken) => {
  token = `Bearer ${newToken}`;
};

const getUser = async () => {
  const data = {
    token: token,
  };
  const config = {
    headers: { Authorization: token },
  };
  const response = await axios.post(baseUrl, data, config);
  return response.data;
};

export default {
  setToken,
  getUser,
};
