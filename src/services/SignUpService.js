import axios from "axios";
const baseUrl = "http://34.126.181.230:80/api/v1/auth/register";

const signup = async (credentials) => {
  const response = await axios.post(baseUrl, credentials);
  return response.data;
};

export default { signup };
