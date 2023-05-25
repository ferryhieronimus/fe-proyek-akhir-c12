import axios from "axios";

const BOOKS_API_URL = "http://34.126.125.223/api/v1/books";


const token = localStorage.getItem("AT")


class BooksService {
    getBook(){
        return axios.get(BOOKS_API_URL, {
            headers: {
                'Authorization': `Bearer ${token}`
              },
        });
    }

    createBook(book){
        return axios.post(BOOKS_API_URL, book, {
            headers: {
                'Authorization': `Bearer ${token}`
              },
        });
    }

    getBookById(bookId){
        return axios.get(BOOKS_API_URL + '/' + bookId, {
            headers: {
                'Authorization': `Bearer ${token}`
              },
        });
    }

    updateBook(book, bookId){
        return axios.put(BOOKS_API_URL + '/' + bookId, book, {
            headers: {
                'Authorization': `Bearer ${token}`
              },
        });
    }
}


// eslint-disable-next-line import/no-anonymous-default-export
export default new BooksService()