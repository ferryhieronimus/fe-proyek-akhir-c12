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
        this.props.navigation(`/admin/add-book/${id}`)
    }

    viewBook(id){
        this.props.navigation(`/admin/view-book/${id}`)
    }

    componentDidMount(){
        BooksService.getBook().then((res) => {
            this.setState({ books: res.data});
        });
    }

    render() {
        return (
            <div className='p-10 bg-[#eeede9]'>
                <h1 className='text-center py-4 display-4'><b>Admin Book List</b></h1>
                <div className='row'>
                    <Link to="/admin/add-book/_add">
                        <button className='btn btn-dark btn-lg'>
                            Add Book
                        </button>
                    </Link>
                </div>
                <div className='row py-4'>
                    <table className='table table-striped table-bordered border-dark'>
                        <thead>
                            <tr>
                                <th> Title</th>
                                <th> Author(s)</th>
                                <th> Genre(s) </th>
                                <th> Img URL</th>
                                <th> Shelf</th>
                                <th> availability</th>
                                <th> Actions </th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                this.state.books.map(
                                    book => 
                                    <tr key = {book.id} >
                                        <td>{book.title}</td>
                                        <td> {book.author.map((author,index)=>{
                                                    return <li key={index}>{author}</li>
                                                })}</td>
                                        <td> {book.genre.map((genre,index)=>{
                                                    return <li key={index}>{genre}</li>
                                                })}</td>
                                        <td>{book.imgURL}</td>
                                        <td>{book.shelf}</td>
                                        <td>{book.available ? 'Available' : 'Not Available'}</td>
                                        <td>
                                            <button onClick={() => this.editBook(book.id)} className="btn btn-dark">
                                                Update 
                                            </button>
                                            <button style={{marginLeft: "10px"}} onClick={() => this.viewBook(book.id)} className="btn btn-secondary">View </button>
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