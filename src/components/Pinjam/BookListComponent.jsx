import React, { Component } from 'react';
import { useParams } from 'react-router-dom';
import PinjamService from '../../services/PinjamService';
import withNavigateHook from './withNavigateHook';

export const withRouter = Component =>
props => {
    let params = useParams();
    return <Component {...props}
    params={params} />   
}

class BookListComponent extends Component {

    constructor(props) {
        super(props)

        let {id} = props.params
        this.state = {
            id: id,
            pinjam: []
        }

    }

    componentDidMount(){
        PinjamService.getBookPinjamById(this.state.id).then((res) => {
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

export default withNavigateHook(BookListComponent);