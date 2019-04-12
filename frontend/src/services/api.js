import axios from 'axios';

const api = axios.create({
    baseURL: 'https://omnistack-backend-toshi.herokuapp.com',
});

export default api;