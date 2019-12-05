import axios from 'axios';
import { baseURL } from '../enviroment';
import { token } from './axios';

const getCursos = async () => {
    const URL = `${baseURL}/cursos/`;
    try {        
        const cursos = await axios.get(URL, {
            headers: {
            'X-Requested-With': 'XMLHttpRequest',
            Authorization: `Bearer ${token}`,
            },
            params: {
                token: token,
            }
        });

        return cursos.data;        
    } catch (error) {
        console.log('CursoService/getCursos::', error);
    }
}

export { getCursos };