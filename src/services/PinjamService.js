import axios from "axios";
import Cookies from "js-cookie";

const PINJAM_API_URL = "http://34.126.183.242/api/v1/pinjam";


const convertCookieToBearerToken = (cookie) => {
    // Extract the value from the cookie
    const cookieValue = cookie.replaceAll('"', "")
  
    // Format the cookie value as a bearer token
    const bearerToken = `Bearer ${cookieValue}`;
  
    return bearerToken;
  };


const tokenJSON = Cookies.get("token");

convertCookieToBearerToken(tokenJSON)


class PinjamService {
    getAllPinjam(){
        return axios.get(PINJAM_API_URL + '/all', {
            headers: {
                Authorization: convertCookieToBearerToken(tokenJSON)
              },
        })
    }

    updatePinjam(userId, pinjamId, pinjam){
        return axios.put(PINJAM_API_URL + '/status/' + userId + '/' + pinjamId, pinjam,{
            headers: {
                Authorization: convertCookieToBearerToken(tokenJSON)
              },
        });
    }

    getUserPinjamBy(){
        return axios.get(PINJAM_API_URL + '/me', {
            headers: {
                Authorization: convertCookieToBearerToken(tokenJSON)
              },
        })
    }

    getBookPinjamById(bookId){
        return axios.get(PINJAM_API_URL + '/book/'  + bookId, {
            headers: {
                Authorization: convertCookieToBearerToken(tokenJSON)
              },
        })
    }

    createPinjam(pinjam){
        return axios.post(PINJAM_API_URL + '/create', pinjam, {
            headers: {
                Authorization: convertCookieToBearerToken(tokenJSON)
              },
        })
    }
}


// eslint-disable-next-line import/no-anonymous-default-export
export default new PinjamService()