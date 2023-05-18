import axios from "axios";
const baseUrl = "http://localhost:8080/api/v1/auth/user";

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

const editUser = async (payload, username) => {
  const config = {
    headers: { Authorization: token },
  };
  const response = await axios.put(`${baseUrl}/${username}`, payload, config);
  return response.data;
};

const deleteUser = async (username) => {
  const config = {
    headers: { Authorization: token },
  };
  const response = await axios.delete(`${baseUrl}/${username}`, config);
  return response.data;
};

export default {
  setToken,
  getUser,
  editUser,
  deleteUser
};
