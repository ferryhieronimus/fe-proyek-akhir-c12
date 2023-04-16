import React, { Component } from 'react';
import { Link,useParams } from 'react-router-dom';
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
        let {id} = props.params
        this.state = {
            id: id,
            author: '',
            title: '',
            genre: '',
            imgURL: '',
            location: ''
        }

        this.changeAuthorHandler = this.changeAuthorHandler.bind(this);
        this.changeTitleHandler = this.changeTitleHandler.bind(this);
        this.changeGenreHandler = this.changeGenreHandler.bind(this);
        this.changeimgURLHandler = this.changeimgURLHandler.bind(this);
        this.changeLocationHandler = this.changeLocationHandler.bind(this);
        this.saveBook = this.saveBook.bind(this)
    }

    componentDidMount(){
        if(this.state.id === '_add'){
            return
        }else{
            BooksService.getBookById(this.state.id).then(res => {
                let book = res.data;
                this.setState({
                    author: book.author,
                    title: book.title,
                    genre: book.genre,
                    imgURL: book.imgURL,
                    location: book.location
                });
            });
        }
    }

    saveBook = (e) => {
        e.preventDefault();
        let book = {
            author: this.state.author, 
            title: this.state.title, 
            genre: this.state.genre , 
            imgURL: this.state.imgURL ,
            location: this.state.location
        };
        if (!( book.genre instanceof Array)){
            let listGenre  = book.genre.split(',');
            book.genre = listGenre
        } 

        console.log('book =>' + JSON.stringify(book));

        if(this.state.id === '_add'){
            BooksService.createBook(book).then(res => {
                this.props.navigation('/admin/books');
            });
        }else{
            BooksService.updateBook(book, this.state.id).then(res => {
                this.props.navigation('/admin/books');
            })
        } 
    }

    changeAuthorHandler= (event) => {
        this.setState({author: event.target.value});
    }

    changeTitleHandler= (event) => {
        this.setState({title: event.target.value});
    }

    changeLocationHandler= (event) => {
        this.setState({location: event.target.value});
    }

    changeimgURLHandler= (event) => {
        this.setState({imgURL: event.target.value});
    }

    changeGenreHandler= (event) => {
        this.setState({genre: event.target.value});
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Add Book</h3>
        }else{
            return <h3 className="text-center">Update Book</h3>
        }
    }

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    this.getTitle()
                                }
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Author: </label>
                                            <input placeholder="Author" name="author" className="form-control" 
                                                value={this.state.author} onChange={this.changeAuthorHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Title: </label>
                                            <input placeholder="Title" name="title" className="form-control" 
                                                value={this.state.title} onChange={this.changeTitleHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Genre: </label>
                                            <input placeholder="Genre" name="genre" className="form-control" 
                                                value={this.state.genre} onChange={this.changeGenreHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> img url: </label>
                                            <input placeholder="img url" name="imgURL" className="form-control" 
                                                value={this.state.imgURL} onChange={this.changeimgURLHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Location: </label>
                                            <input placeholder="Location" name="location" className="form-control" 
                                                value={this.state.location} onChange={this.changeLocationHandler}/>
                                        </div>

                                            <button className="btn btn-success" onClick={this.saveBook}>Save</button>
                                        <Link to="/admin/books">
                                            <button className="btn btn-danger"style={{marginLeft: "10px"}}>Cancel</button>
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