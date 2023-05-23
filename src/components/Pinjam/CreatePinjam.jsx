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

class CreatePinjamComponent extends Component {
    constructor(props) {
        super(props)
        let {id} = props.params
        this.state = {
            id: id,
            bookId: ''
        }

        this.changebookIdHandler = this.changebookIdHandler(this);
        this.savePinjam = this.savePinjam.bind(this)
    }

    componentDidMount(){
        if(this.state.id === '_add'){
            return
        }
        else{
            PinjamService.getBookPinjamById(this.state.id).then(res => {
                let pinjam = res.data;
                this.setState({
                    orderDate : pinjam.orderDate,
                    pinjamDetail : pinjam.pinjamDetail
                });
            });
        }
    }

    savePinjam = (e) => {
        e.preventDefault();
        let pinjam = {
            orderDate: this.state.orderDate,
            bookId: this.state.bookId

        };
        if (!( pinjam.bookId instanceof Array)){
            let listPinjam  = pinjam.bookId.split(',');
            pinjam.bookId = listPinjam
        } 

        console.log('pinjam =>' + JSON.stringify(pinjam));

        if(this.state.id === '_add'){
            PinjamService.createPinjam(pinjam).then(res => {
                this.props.navigation('/admin/pinjam');
            });
        }else{
            PinjamService.updatePinjam(pinjam, this.state.id).then(res => {
                this.props.navigation('/admin/pinjam');
            })
        } 
    }

    changeOrderDateHandler= (event) => {
        this.setState({orderDate: event.target.value});
    }

    changePinjamDetailHandler= (event) => {
        this.setState({pinjamDetail: event.target.value});
    }
}

export default withNavigateHook(withRouter(CreatePinjamComponent));