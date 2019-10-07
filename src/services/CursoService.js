import axios from 'axios';
import { baseURL } from '../enviroment';

const getCursos = async () => {
    const URL = `${baseURL}/cursos/`;
    try {        
        const cursos = await axios.get(URL);

        return cursos.data;        
    } catch (error) {
        console.log('CursoService/getCursos::', error);
    }
}

export { getCursos };