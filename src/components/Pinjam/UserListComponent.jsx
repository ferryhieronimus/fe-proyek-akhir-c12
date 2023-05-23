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
            <div>
                <h1 className='text-center py-3'>Pinjam List</h1>

                <div className='row py-4'>
                    <table className='table table-striped table-bordered'>
                        <thead>
                            <tr>
                                <th> PinjamId </th>
                                <th> PinjamDate </th>
                                <th> pinjamDetailsData </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.pinjam.map(
                                    pinjam => 
                                    <tr key = {pinjam.pinjamId} >
                                        <td>{pinjam.pinjamId}</td>
                                        <td>{pinjam.pinjamDate}</td>
                                        <td> {pinjam.pinjamDetailsData.map((item, index)=>{
                                                    return <div key={index}>
                                                    <p>Book ID: {item.bookId}</p>
                                                    <p>Status: {item.status ? 'Not Accepted' : 'Accepted'}</p>
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