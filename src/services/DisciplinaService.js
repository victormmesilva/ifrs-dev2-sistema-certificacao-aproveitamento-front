import axios from 'axios';
import { baseURL } from '../enviroment';

const getDisciplinas = async (curso) => {
    const URL = `${baseURL}/cursos/${curso.value}/disciplinas`; 
    try {
        const disciplinas = await axios.get(URL);

        return disciplinas.data;
    } catch (error) {
        console.log('DisciplinaService/getDisciplinas::', error);        
    }
}

export { getDisciplinas };