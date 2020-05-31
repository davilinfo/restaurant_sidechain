import axios from 'axios';

const api = axios.create({
    baseURL : 'http://13.58.6.98:3334'
});

export default api;