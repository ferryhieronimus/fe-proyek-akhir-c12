import React, { Component } from 'react';

class BooksHeader extends Component {
    render() {
        return (
            <div>
                <header>
                    <nav className='navbar navbar-expand-md navbar dark bg-dark'>
                    <div><a href='/' className='navbar-brand text-muted'>Library Management App</a></div>
                    </nav>
                </header>
            </div>
        );
    }
}

export default BooksHeader;