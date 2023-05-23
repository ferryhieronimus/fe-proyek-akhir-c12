import React, { Component } from 'react';
import PinjamService from '../../services/PinjamService';
import withNavigateHook from './withNavigateHook';


class AdminListComponent extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            pinjam: []
        }

    }

    UpdatePinjam(bookid){
        PinjamService.updatePinjam(bookid).then(res => {
            this.setState(
                {
                    pinjam: this.state.pinjam.filter(pinjam => pinjam.bookId !== bookid)
                }
                
                )
        });
    }

    componentDidMount(){
        PinjamService.getAllPinjam().then((res) => {
            this.setState({ pinjam: res.data});
        });
    }

    render() {
        return (
            <div>
                <h2 className='text-center py-4'>Pinjam List</h2>

                <div className='row py-4'>
                    <table className='table table-striped table-bordered'>
                        <thead>
                            <tr>
                                <th> User </th>
                                <th> Order Date </th>
                                <th> Pinjam Detail</th>
                                <th> Actions </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.pinjam.map(
                                    pinjam => 
                                    <tr key = {pinjam.pinjamId} >
                                        <td>{pinjam.userId}</td>
                                        <td>{pinjam.pinjamDate}</td>
                                        <td> {pinjam.pinjamDetailsData.map((item, index)=>{
                                                    return <div key={index}>
                                                    <p>Book ID: {item.bookId}</p>
                                                    <p>Status: {item.status ? 'Not Accepted' : 'Accepted'}</p>
                                                  </div>
                                                })}</td>
                                        <td> {pinjam.pinjamDetailsData.map((item, index)=>{
                                                return <div key={index}>
                                                <button onClick={() => this.editBook(item.bookId)} className="btn btn-info">Update </button>
                                              </div>
                                                })}
                                        </td>
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

export default withNavigateHook(AdminListComponent);