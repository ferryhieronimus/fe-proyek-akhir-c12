import React, { Component } from 'react';
import { Link, useParams } from 'react-router-dom';
import BooksService from '../../services/BooksService';
import withNavigateHook from './withNavigateHook';

export const withRouter = Component =>
    props => {
        let params = useParams();
        return <Component {...props}
            params={params} />
    }

class CreateBookComponent extends Component {
    constructor(props) {
        super(props)
        let { id } = props.params
        this.state = {
            id: id,
            author: '',
            title: '',
            genre: '',
            imgURL: '',
            shelf: '',
            available: false,
        }

        this.changeAuthorHandler = this.changeAuthorHandler.bind(this);
        this.changeTitleHandler = this.changeTitleHandler.bind(this);
        this.changeGenreHandler = this.changeGenreHandler.bind(this);
        this.changeimgURLHandler = this.changeimgURLHandler.bind(this);
        this.changeShelfHandler= this.changeShelfHandler.bind(this);
        this.changeAvailableHandler = this.changeAvailableHandler.bind(this);
        this.saveBook = this.saveBook.bind(this)
    }

    componentDidMount() {
        if (this.state.id === '_add') {
            return
        } else {
            BooksService.getBookById(this.state.id).then(res => {
                let book = res.data;
                this.setState({
                    author: book.author,
                    title: book.title,
                    genre: book.genre,
                    imgURL: book.imgURL,
                    shelf: book.shelf,
                    available: book.available,
                });
            });
        }
    }

    saveBook = (e) => {
        e.preventDefault();
        let book = {
            author: this.state.author,
            title: this.state.title,
            genre: this.state.genre,
            imgURL: this.state.imgURL,
            shelf: this.state.shelf,
            available: this.state.available,
        };
        if (!(book.genre instanceof Array)) {
            let listGenre = book.genre.split(',');
            book.genre = listGenre
        }
        if (!(book.author instanceof Array)) {
            let listAuthor = book.author.split(',');
            book.author = listAuthor
        }

        console.log('book =>' + JSON.stringify(book));

        if (this.state.id === '_add') {
            BooksService.createBook(book).then(res => {
                this.props.navigation('/admin/books');
            });
        } else {
            BooksService.updateBook(book, this.state.id).then(res => {
                this.props.navigation('/admin/books');
            })
        }
    }

    changeAuthorHandler = (event) => {
        this.setState({ author: event.target.value });
    }

    changeTitleHandler = (event) => {
        this.setState({ title: event.target.value });
    }

    changeShelfHandler = (event) => {
        this.setState({ shelf: event.target.value });
    }

    changeimgURLHandler = (event) => {
        this.setState({ imgURL: event.target.value });
    }

    changeGenreHandler = (event) => {
        this.setState({ genre: event.target.value });
    }


    changeAvailableHandler = (event) => {
        this.setState({ available: event.target.checked });
    }

    getTitle() {
        if (this.state.id === '_add') {
            return <h3 className="text-center">Add Book</h3>
        } else {
            return <h3 className="text-center">Update Book</h3>
        }
    }

    render() {
        return (
            <div>
                <br></br>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            {
                                this.getTitle()
                            }
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label> Author: </label>
                                        <input placeholder="Author" name="author" className="form-control"
                                            value={this.state.author} onChange={this.changeAuthorHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Title: </label>
                                        <input placeholder="Title" name="title" className="form-control"
                                            value={this.state.title} onChange={this.changeTitleHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Genre: </label>
                                        <input placeholder="Genre" name="genre" className="form-control"
                                            value={this.state.genre} onChange={this.changeGenreHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> img url: </label>
                                        <input placeholder="img url" name="imgURL" className="form-control"
                                            value={this.state.imgURL} onChange={this.changeimgURLHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Shelf: </label>
                                        <input placeholder="Shelf" name="shelf" className="form-control"
                                            value={this.state.shelf} onChange={this.changeShelfHandler} />
                                    </div>
                                    <div className="form-group">
                                        <input type="checkbox" name="available" className="w-7"
                                         onChange={this.changeAvailableHandler} checked={this.state.available} />
                                        <label> available
                                        </label>
                                    </div>
                                    <button className="btn btn-success" onClick={this.saveBook}>Save</button>
                                    <Link to="/admin/books">
                                        <button className="btn btn-danger" style={{ marginLeft: "10px" }}>Cancel</button>
                                    </Link>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default withNavigateHook(withRouter(CreateBookComponent));