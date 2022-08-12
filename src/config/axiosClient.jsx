import axios from 'axios';

const axiosClient = axios.create({
    baseURL: `${import.meta.env.VITE_RUTA}` 
});

export default axiosClient;