import React, { Component } from 'react';
import withNavigateHook from './withNavigateHook';
import { Link, useParams } from 'react-router-dom';
import BooksService from '../../services/BooksService';

export const withRouter = Component =>
props => {
    let params = useParams();
    return <Component {...props}
    params={params} />   
}

class ViewBook extends Component {

    constructor(props) {
        super(props)

        let {id} = props.params
        this.state = {
            id: id,
            book: {}
        }

    }

    componentDidMount(){
        BooksService.getBookById(this.state.id).then(res => {
            this.setState({book: res.data});
        })
    }


    render() {
        return (
            <div>
               <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center py-2"> View Book Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Book's Author &nbsp;&nbsp;&nbsp;:&nbsp;&nbsp; </label>
                            <div> {this.state.book.author?.map((author,index)=>{
                                                    return <li key={index}>{author}</li>
                                                })}</div>
                        </div>
                        <div className = "row">
                            <label> Book's Title  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp; </label>
                            <div> { this.state.book.title }</div>
                        </div>
                        <div className = "row">
                            <label> Book's Genre &nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp; </label>
                        <div >
                        {this.state.book.genre?.map((genre,index)=>{
                                                    return <li key={index}>{genre}</li>
                                                })}
                        </div>   
                        </div>
                        <div className = "row">
                            <label> Book's img URL :&nbsp;&nbsp; </label>
                            <div> { this.state.book.imgURL }</div>
                        </div>
                        <div className = "row">
                            <label> Book's Shelf :&nbsp;&nbsp; </label>
                            <div> { this.state.book.location }</div>
                        </div>
                        <div className = "row">
                            <label> Book's Avaibility :&nbsp;&nbsp; </label>
                            <div> { this.state.book.available ? 'Available' : 'Not Available' }</div>
                        </div>
                        <Link to="/admin/books">
                            <button className='btn btn-primary row'>
                                Back
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default withNavigateHook(withRouter(ViewBook));