import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PinjamService from '../../services/PinjamService';


const BookListComponent = () => {
    const { id } = useParams(); // Retrieve the 'id' parameter from the URL

    const [pinjam, setPinjam] = useState([]);

    useEffect(() => {
        PinjamService.getBookPinjamById(id)
            .then((res) => {
                setPinjam(res.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [id]);

    return (
        <div className='p-10 bg-[#eeede9] min-h-screen' >
        <div className='container'>
        </div>
        <div>
            <h2 className='text-center py-4 display-4'>Pinjam List</h2>

            <div className="row py-4">
                <table className="table table-striped table-bordered" >
                    <thead>
                        <tr>
                            <th style={{ textAlign: 'center' }}>PinjamId</th>
                            <th style={{ textAlign: 'center' }}>PinjamDate</th>
                            <th style={{ textAlign: 'center' }}>PinjamDetailsData</th>
                        </tr>
                    </thead>
                    <tbody>
                        {pinjam.map((pinjam) => (
                            <tr key={pinjam.pinjamId}>
                                <td style={{ textAlign: 'center' }}>{pinjam.pinjamId}</td>
                                <td style={{ textAlign: 'center' }}>{pinjam.pinjamDate}</td>
                                <td style={{ textAlign: 'center' }}>
                                    {pinjam.pinjamDetailsData.map((item, index) => (
                                        <div key={index}>
                                            <p style={{ textAlign: 'center' }}>Status: {item.status ? 'Not Accepted' : 'Accepted'}</p>
                                        </div>
                                    ))}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>

        </div>        
    );
};

export default BookListComponent;
