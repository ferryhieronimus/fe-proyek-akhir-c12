import axios from "axios";

const BOOKS_API_URL = "http://34.126.125.223/api/v1/books";


const admin_token = localStorage.getItem("AT")


class BooksService {
    getBook(){
        return axios.get(BOOKS_API_URL,{
            headers: {
                'Authorization': `Bearer ${admin_token}`
              },
        });
    }

    createBook(book){
        return axios.post(BOOKS_API_URL, book)
    }

    getBookById(bookId){
        return axios.get(BOOKS_API_URL + '/' + bookId)
    }

    updateBook(book, bookId){
        return axios.put(BOOKS_API_URL + '/' + bookId, book);
    }

    deleteBook(bookId){
        return axios.delete(BOOKS_API_URL + '/' + bookId)
    }
}


// eslint-disable-next-line import/no-anonymous-default-export
export default new BooksService()