// interceptadores e responsabilidades

'use client'


import Cookies from "js-cookie";
import axios from "axios"


const api = axios.create({
    baseURL:'http://localhost:8080'
});

// fessor quer o response
api.interceptors.request.use(
    (config) =>{

        const token = Cookies.get('token');
        
        if(token){
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    }
);

export default api