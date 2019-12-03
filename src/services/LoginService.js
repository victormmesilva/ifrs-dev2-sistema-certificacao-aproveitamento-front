import axios from 'axios';
import { baseURL } from '../enviroment';
import { token } from './axios';


    const postLogin = async (login) => {
      
         
        const URL = `${baseURL}/usuarios/login/`;
    
        try {
            const retorno = await axios.post(URL, login);
            const token= retorno.headers.token;
            axios.defaults.headers.common['token']=token;
            localStorage.setItem("token",token);
            
        } catch (error) {
            console.log('LoginService/postLogin::', error);
        }
    }
    export{postLogin};
