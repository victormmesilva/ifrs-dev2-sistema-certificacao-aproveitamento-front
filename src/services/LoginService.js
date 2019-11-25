import axios from 'axios';
import { baseURL } from '../enviroment';
import { token } from './axios';


    const postLogin = async (login) => {
        if(!login) return;
         
        const URL = `${baseURL}/usuarios/login`;
    
        try {
            const response = await axios.post(URL, login, {
                headers: {
                    'X-Requested-With': 'XMLHttpRequest',
                    Authorization: `Bearer ${token}`,
                },
                params: {
                    token: token,
                },
            });
            
            return (response.status === 201);
        } catch (error) {
            console.log('LoginService/postLogin::', error);
        }
    }
    export{postLogin};
