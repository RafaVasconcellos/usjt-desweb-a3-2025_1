//aqui está configurado o axios, com a url do dominio e o conteudo definido como dados json

import axios from 'axios'

const axiosClient = axios.create({
    baseURL: 'http://localhost:3000',
    headers: {
        'Content-Type': 'application/json',
    },
});

export default axiosClient;