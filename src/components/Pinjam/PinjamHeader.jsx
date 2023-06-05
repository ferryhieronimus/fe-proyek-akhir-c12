import React, { Component } from 'react';

class PinjamHeader extends Component {
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

export default PinjamHeader;