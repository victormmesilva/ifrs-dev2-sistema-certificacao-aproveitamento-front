/* import axios from 'axios'; */

const postRequisicao = (requisicao) => {
    if(!requisicao) return;
    
    try {
        console.log('Requisição enviada!');

        return requisicao;
    } catch (error) {
        console.log('Requisição falhou!');
    }
}

export { postRequisicao };