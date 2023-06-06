import axios from 'axios';
const baseUrl = 'http://34.126.125.223/api/v1/books/filter';
const token = localStorage.getItem("AT")

const filter = async(criteria) => {
  const response = await axios.post(baseUrl, criteria, {
    headers: {'Authorization': `Bearer ${token}`},
  });
  return response.data;
};

export default {filter};