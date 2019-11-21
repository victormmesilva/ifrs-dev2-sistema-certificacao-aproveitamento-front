import axios from 'axios';
import { baseURL } from '../enviroment';

const  getLogin = async (usuario) => {
    if(!usuario) return;
     
    const URL = `${baseURL}/usuarios/login?usuario=`;

    try {
        const response = await axios.get(URL,encodeURIComponent(usuario) );
        
        return (response.status === 201);
    } catch (error) {
        console.log('LoginService/getLogin::', error);
    }
}

export { getLogin };