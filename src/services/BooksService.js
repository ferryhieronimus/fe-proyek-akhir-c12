import axios from "axios";

const BOOKS_API_URL = "http://localhost:8080/api/v1/books";

class BooksService {
    getBooks(){
        return axios.get(BOOKS_API_URL);
    }
}


// eslint-disable-next-line import/no-anonymous-default-export
export default new BooksService()