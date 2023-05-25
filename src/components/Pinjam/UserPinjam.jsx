import React, { Component } from 'react';
import PinjamFooter from './PinjamFooter';
import PinjamHeader from './PinjamHeader';
import UserListComponent from './UserListComponent';
import Navbar from '../Headers/Navbar';

class Pinjam extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <div className='container'>
                    <UserListComponent/>
                </div>
            </div>
        );
    }
}

export default Pinjam;