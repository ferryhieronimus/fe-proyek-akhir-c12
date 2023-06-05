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
                <div className = "card col-md-6 offset-md-3 bg-[#eeede9]">
                    <h1 className = "text-center p-4"><b> View Book Details</b></h1>
                    <div className = "card-body">
                        <div className = "row">
                            <label><b> Book's Author &nbsp;&nbsp;&nbsp;:&nbsp;&nbsp; </b></label>
                            <div> {this.state.book.author?.map((author,index)=>{
                                                    return <li key={index}>{author}</li>
                                                })}</div>
                        </div>
                        <div className = "row">
                            <label><b> Book's Title  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp; </b></label>
                            <div> { this.state.book.title }</div>
                        </div>
                        <div className = "row">
                            <label><b> Book's Genre &nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp; </b></label>
                        <div >
                        {this.state.book.genre?.map((genre,index)=>{
                                                    return <li key={index}>{genre}</li>
                                                })}
                        </div>   
                        </div>
                        <div className = "row">
                            <label><b> Book's img URL :&nbsp;&nbsp; </b></label>
                            <div> { this.state.book.imgURL }</div>
                        </div>
                        <div className = "row">
                            <label><b> Book's Shelf :&nbsp;&nbsp; </b></label>
                            <div> { this.state.book.shelf }</div>
                        </div>
                        <div className = "row">
                            <label><b> Book's Avaibility :&nbsp;&nbsp; </b></label>
                            <div> { this.state.book.available ? 'Available' : 'Not Available' }</div>
                        </div>
                        <Link to="/admin/books">
                        <div className='flex justify-center'>
                            <button className='btn btn-secondary row'>
                                Back
                            </button>
                        </div>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default withNavigateHook(withRouter(ViewBook));