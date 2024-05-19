import axios from 'axios';
import { getCookie } from 'react-use-cookie';


const ApiClient = () => {
    console.log(getCookie('X-CSRF-TOKEN'));
    const API_SERVER_URL = process.env.REACT_APP_BASE_URL_API_REQUEST;
    const axiosInstance = axios.create({
        baseURL  : API_SERVER_URL,
        withXSRFToken : true,
        withCredentials : true,
        headers : {
            'Content-Type': 'multipart/form-data',
            'accept': 'application/json',
            'X-CSRF-TOKEN' : getCookie('X-CSRF-TOKEN'),
            'Access-Control-Allow-Origin': 'true'
        }
    });


    const onRequest = (config : any) => {
        if ((
                config.method == 'post' || 
                config.method == 'put' || 
                config.method == 'delete'
                /* other methods you want to add here */
            ) && !getCookie('X-CSRF-TOKEN')) {
            return setCSRFToken()
                .then(response => config).catch((e) => {  console.log(e); });
        }
        return config;
    }
    

    const setCSRFToken = () => {
        
        return axiosInstance.get(process.env.REACT_APP_BASE_URL_API+'/sanctum/csrf-cookie');
    }
    axiosInstance.interceptors.request.use(onRequest, null);
    
    return axiosInstance
};

export default ApiClient;