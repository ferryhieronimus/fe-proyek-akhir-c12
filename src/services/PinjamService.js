import axios from "axios";

const PINJAM_API_URL = "http://34.126.183.242/api/v1/pinjam";

const token = localStorage.getItem("AT")

class PinjamService {
    getAllPinjam(){
        return axios.get(PINJAM_API_URL + '/all', {
            headers: {
                'Authorization': `Bearer ${token}`
              },
        })
    }

    updatePinjam(userId, pinjamId, pinjam){
        return axios.put(PINJAM_API_URL + '/status/' + userId + '/' + pinjamId, pinjam,{
            headers: {
                'Authorization': `Bearer ${token}`
              },
        });
    }

    getUserPinjamBy(){
        return axios.get(PINJAM_API_URL + '/me', {
            headers: {
                'Authorization': `Bearer ${token}`
              },
        })
    }

    getBookPinjamById(bookId){
        return axios.get(PINJAM_API_URL + '/book/'  + bookId, {
            headers: {
                'Authorization': `Bearer ${token}`
              },
        })
    }

    createPinjam(pinjam){
        return axios.post(PINJAM_API_URL + '/create', pinjam, {
            headers: {
                'Authorization': `Bearer ${token}`
              },
        })
    }
}


// eslint-disable-next-line import/no-anonymous-default-export
export default new PinjamService()