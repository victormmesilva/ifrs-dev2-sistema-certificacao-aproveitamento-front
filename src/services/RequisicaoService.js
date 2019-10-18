import axios from 'axios';
import { baseURL } from '../enviroment';

/*
{
	"anexos": "teste",
	"disciplinaSolicitada": {
		"id": 1, 
		"nome": "Inglês",
		"cargaHoraria": 60
	},
	"formacaoAtividadeAnterior": "Teste",
	"tipo": "certificacao"
}
*/

const postRequisicao = async (requisicao) => {
    if(!requisicao) return;

    const { tipo, formacaoAtividadeAnterior, disciplinaSolicitada, anexos } = requisicao; 

    const URL = `${baseURL}/requisicoes/`;
    const requisicaoToPost = {
        tipo,
        formacaoAtividadeAnterior,
        anexos,
        disciplinaSolicitada: {
            id: disciplinaSolicitada.id,
            nome: disciplinaSolicitada.nome,
            cargaHoraria: 60
        }
    };
    
    console.log(requisicaoToPost);
    try {
        const response = await axios.post(URL, requisicaoToPost);
        
        return (response.status === 201);
    } catch (error) {
        console.log('RequisicaoService/postRequisicao::', error);
    }
}

export { postRequisicao };