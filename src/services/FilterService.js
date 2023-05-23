import axios from 'axios';
const baseUrl = 'http://localhost:8080/api/v1/books/filter';

const filter = async(criteria) => {
  const response = await axios.post(baseUrl, criteria);
  return response.data;
};

export default {filter};