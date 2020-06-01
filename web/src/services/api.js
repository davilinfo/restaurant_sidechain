import axios from 'axios';

const api = axios.create({
    baseURL : 'http://www.liskrestaurant.com:3334'
});

export default api;