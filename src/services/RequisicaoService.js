import axios from 'axios';
import { baseURL } from '../enviroment';

const postRequisicao = async (requisicao) => {
    if(!requisicao) return;

    const URL = `${baseURL}/requisicoes/`;
    const requisicaoToPost = {
        tipo: requisicao.tipo,
        id:"",
        formacaoAtividadeAnterior: requisicao.formacaoAtividadeAnterior,
        criterioAvaliacao:"",
        deferido:false,
        dataRequisicao: "",
        anexos: requisicao.anexos,
        disciplinaSolicitada: requisicao.disciplinaSolicitada
    };

    try {
        const requisicaoCriada = await axios.post(URL, requisicaoToPost);

        return requisicaoCriada;
    } catch (error) {
        console.log('RequisicaoService/postRequisicao::', error);
    }
}

export { postRequisicao };