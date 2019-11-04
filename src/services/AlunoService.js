import axios from 'axios';
import { baseURL } from '../enviroment';

const postAluno = async (aluno) => {
    if(!requisicao) return;

    const URL = `${baseURL}/alunos/`;
    //tipo matricula dataIngresso senha nome login novaSenha email permissoes permissoes
    const alunoToPost = {
        tipo:aluno.tipo,
        nome: aluno.nome,
        senha: aluno.senha,
        login: aluno.login,
        novaSenha:aluno.senha,
        email:aluno.email,
        permissoes: aluno.permissoes, 
        id: aluno.id,
    };

    try {
        const alunoCriado = await axios.post(URL, alunoToPost);

        return alunoCriado;
    } catch (error) {
        console.log('AlunoService/posAluno::', error);
    }
}

export { aluno };