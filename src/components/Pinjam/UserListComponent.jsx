import React, { Component } from 'react';
import PinjamService from '../../services/PinjamService';
import withNavigateHook from './withNavigateHook';


class UserListComponent extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            pinjam: []
        }

    }

    componentDidMount(){
        PinjamService.getUserPinjamBy().then((res) => {
            this.setState({ pinjam: res.data});
        });
    }

    render() {
        return (
            <div className='p-10 bg-[#eeede9] min-h-screen'>
                <h1 className='text-center py-4 display-4'>Pinjam List</h1>

                <div className='row py-4  p-10 bg-[#eeede9]' >
                    <table  className='table table-striped table-bordered'>
                        <thead>
                            <tr>
                                <th style={{ textAlign: 'center' }}> PinjamId </th>
                                <th style={{ textAlign: 'center' }}> PinjamDate </th>
                                <th style={{ textAlign: 'center' }}> PinjamDetailsData </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.pinjam.map(
                                    pinjam => 
                                    <tr key = {pinjam.pinjamId} >
                                        <td style={{ textAlign: 'center' }}>{pinjam.pinjamId}</td>
                                        <td style={{ textAlign: 'center' }}>{pinjam.pinjamDate}</td>
                                        <td> {pinjam.pinjamDetailsData.map((item, index)=>{
                                                    return <div key={index}>
                                                    <p>Book ID: {item.bookId}</p>
                                                    <p>Status: {item.status ? 'Accepted' : 'Not Accepted'}</p>
                                                  </div>
                                                })}</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default withNavigateHook(UserListComponent);