import React, { Component } from 'react';
import PinjamFooter from './PinjamFooter';
import PinjamHeader from './PinjamHeader';
import UserListComponent from './UserListComponent';

class Pinjam extends Component {
    render() {
        return (
            <div>
                <PinjamHeader/>
                <div className='container'>
                    <UserListComponent/>
                </div>
                <div className='footer'>
                    <PinjamFooter/>
                </div>
            </div>
        );
    }
}

export default Pinjam;