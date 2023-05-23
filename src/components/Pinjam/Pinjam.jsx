import React, { Component } from 'react';
import PinjamFooter from './PinjamFooter';
import PinjamHeader from './PinjamHeader';
import AdminListComponent from './AdminListComponent';

class Pinjam extends Component {
    render() {
        return (
            <div>
                <PinjamHeader/>
                <div className='container'>
                    <AdminListComponent/>
                </div>
                <div className='footer'>
                    <PinjamFooter/>
                </div>
            </div>
        );
    }
}

export default Pinjam;