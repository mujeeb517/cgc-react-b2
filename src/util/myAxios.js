import axios from "axios";

function myAxios() {

    const headers = {};
    const token = localStorage.getItem('token');
    if (token) {
        headers.authorization = `Bearer ${token}`
    }
    const instance = axios.create({
        baseURL: 'https://cgc-api-b2.onrender.com',
        headers: headers
    });

    return instance;
}

export default myAxios;