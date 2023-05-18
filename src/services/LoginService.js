import axios from "axios";
const baseUrl = "http://localhost:8080/api/v1/auth/login";

const login = async (credentials) => {
  const response = await axios.post(baseUrl, credentials);
  return response.data;
};

export default { login };
