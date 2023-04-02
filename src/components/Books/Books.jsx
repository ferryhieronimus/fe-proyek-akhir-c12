import React, { Component } from 'react';
import BooksFooter from './BooksFooter';
import BooksHeader from './BooksHeader';
import ListBookComponent from './ListBookComponent';

class Books extends Component {
    render() {
        return (
            <div>
                <BooksHeader/>
                <div className='container'>
                    <ListBookComponent/>
                </div>
                <div className='footer'>
                    <BooksFooter/>
                </div>
            </div>
        );
    }
}

export default Books;