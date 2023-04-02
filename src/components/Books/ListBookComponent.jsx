import React, { Component } from 'react';
import BooksService from '../../services/BooksService';
import { Link } from 'react-router-dom';
import withNavigateHook from './withNavigateHook';


class ListBookComponent extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            books: []
        }

    }

    editBook(id){
        this.props.navigation(`/add-book/${id}`)
    }

    deleteBook(id){
        BooksService.deleteBook(id).then(res => {
            this.setState({books: this.state.books.filter(book => book.id !== id)})
        });
    }

    viewBook(id){
        this.props.navigation(`/view-book/${id}`)
    }

    componentDidMount(){
        BooksService.getBook().then((res) => {
            this.setState({ books: res.data});
        });
    }

    render() {
        return (
            <div>
                <h2 className='text-center py-4'>Books List</h2>
                <div className='row'>
                    <Link to="/add-book/_add">
                        <button className='btn btn-primary'>
                            Add Book
                        </button>
                    </Link>
                </div>
                <div className='row py-4'>
                    <table className='table table-striped table-bordered'>
                        <thead>
                            <tr>
                                <th> Title</th>
                                <th> Author</th>
                                <th> Location</th>
                                <th> Actions </th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                this.state.books.map(
                                    book => 
                                    <tr key = {book.id} >
                                        <td>{book.title}</td>
                                        <td>{book.author}</td>
                                        <td>{book.location}</td>
                                        <td>
                                            <button onClick={() => this.editBook(book.id)} className="btn btn-info">
                                                Update 
                                            </button>
                                            <button style={{marginLeft: "10px"}} onClick={() => this.deleteBook(book.id)} className="btn btn-danger">Delete </button>
                                            <button style={{marginLeft: "10px"}} onClick={() => this.viewBook(book.id)} className="btn btn-info">View </button>
                                        </td>
                                    </tr>
                                )
                            }

                        </tbody>

                    </table>
                </div>
            </div>
        );
    }
}

export default withNavigateHook(ListBookComponent);