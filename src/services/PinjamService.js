import axios from "axios";

const PINJAM_API_URL = "http://localhost:8082/api/v1/pinjam";

const admin_token = localStorage.getItem("AT")

const user_token = localStorage.getItem("KT")

class PinjamService {
    getAllPinjam(){
        return axios.get(PINJAM_API_URL + '/all', {
            headers: {
                'Authorization': `Bearer ${admin_token}`
              },
        })
    }

    updatePinjam(bookId){
        return axios.put(PINJAM_API_URL + '/status/' + bookId,{
            headers: {
                'Authorization': `Bearer ${admin_token}`
              },
        });
    }

    getUserPinjamBy(){
        return axios.get(PINJAM_API_URL + '/me', {
            headers: {
                'Authorization': `Bearer ${user_token}`
              },
        })
    }

    getBookPinjamById(pinjamId){
        return axios.get(PINJAM_API_URL + '/book/'  + pinjamId, {
            headers: {
                'Authorization': `Bearer ${admin_token}`
              },
        })
    }

    createPinjam(pinjam){
        return axios.post(PINJAM_API_URL + '/create', pinjam, {
            headers: {
                'Authorization': `Bearer ${user_token}`
              },
        })
    }
}


// eslint-disable-next-line import/no-anonymous-default-export
export default new PinjamService()