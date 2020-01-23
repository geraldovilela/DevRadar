import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5561'
});

export default api;