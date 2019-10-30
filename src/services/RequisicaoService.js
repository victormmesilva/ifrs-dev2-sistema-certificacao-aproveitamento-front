import axios from 'axios';
import { baseURL } from '../enviroment';

const postRequisicao = async (requisicao) => {
    if(!requisicao) return;
     
    const URL = `${baseURL}/requisicoes/`;

    try {
        const response = await axios.post(URL, requisicao);
        
        return (response.status === 201);
    } catch (error) {
        console.log('RequisicaoService/postRequisicao::', error);
    }
}

export { postRequisicao };