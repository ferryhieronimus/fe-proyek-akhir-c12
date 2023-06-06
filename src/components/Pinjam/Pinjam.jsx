import React, { Component } from 'react';
import PinjamFooter from './PinjamFooter';
import PinjamHeader from './PinjamHeader';
import AdminListComponent from './AdminListComponent';

class Pinjam extends Component {
    render() {
        return (
            <div>
                <AdminListComponent/>
            </div>
        );
    }
}

export default Pinjam;