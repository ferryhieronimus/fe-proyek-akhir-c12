import axios from "axios";
const baseUrl = "http://34.126.181.230:443/api/v1/auth/login";

const login = async (credentials) => {
  const response = await axios.post(baseUrl, credentials);
  return response.data;
};

export default { login };
