import axios from "axios";
const baseUrl = "http://34.126.181.230:80/api/v1/auth/user";

let token = null;

const setToken = (newToken) => {
  token = `Bearer ${newToken}`;
};

const getUser = async () => {
  const config = {
    headers: { Authorization: token },
  };
  const response = await axios.get(baseUrl, config);
  return response.data;
};

const getAllUser = async () => {
  const config = {
    headers: { Authorization: token },
  };
  const response = await axios.get(`${baseUrl}/all`, config);
  return response.data;
};

export default {
  setToken,
  getUser,
  getAllUser
};
