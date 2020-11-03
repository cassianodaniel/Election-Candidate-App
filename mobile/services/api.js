import axios from 'axios';

const api = axios.create({
    baseURL: 'https://teste-minhacampanha.herokuapp.com'
});

export default api;