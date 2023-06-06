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
                <UserListComponent/>
            </div>
        );
    }
}

export default Pinjam;