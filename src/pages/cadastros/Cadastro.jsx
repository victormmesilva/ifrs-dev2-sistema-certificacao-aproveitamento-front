import React, {useState} from 'react';
import TituloPagina from '../../components/TituloPagina';
import { Form, Button } from 'react-bootstrap';
import SACEInput from '../../components/inputs/SACEInput';


export default function Cadastro(){
    const [matricula, setMatricula] = useState(''); 
    const [matriculaInvalida, setMatriculaInvalida] = useState(false); 

    const [tipo] = useState("aluno");

    const [dataIngresso, setDataIngresso] = useState(""); 
    const [dataIngressoInvalida, setDataIngressoInvalida] = useState(false); 
    
    const [senha, setSenha] = useState(""); 
    const [senhaInvalida, setSenhaInvalida] = useState(false); 
    
    const [nome, setNome] = useState(""); 
    const [nomeInvalido, setNomeInvalido] = useState(false);

    const [login, setLogin] = useState(""); 
    const [loginInvalido, setLoginInvalido] = useState(false); 
    
    const [confirmaSenha, setConfirmaSenha] = useState(""); 
    const [confirmaSenhaInvalida, setConfirmaSernhaInvalida] = useState(false); 

    const [email, setEmail] = useState(""); 
    const [emailInvalido, setEmailInvalido] = useState(false); 

    const [permissoes, setPermissoes] = useState(""); 


    return(
        <Form.Group>
            <SACEInput
                label={'Nome'}
                placeholder={'Informe o seu nome. '}
                onChange={({target}) => setNome(target.value)}
                value={nome}
                setNome={setNome}
                onError={nomeInvalido}
                onErrorMessage={'Você não inseriu o seu nome corretamente!'}
            />
            <SACEInput
                label={'Email'}
                placeholder={'Informe o seu email. '}
                onChange={({target}) => setEmail(target.value)}
                value={email}
                setEmail={setEmail}
                onError={emailInvalido}
                onErrorMessage={'Você não inseriu o seu email corretamente!'}
            />
            <SACEInput
                label={'Matricula'}
                placeholder={'Informe a sua matrícula. '}
                onChange={({target}) => setMatricula(target.value)}
                value={matricula}
                setMatricula={setMatricula}
                onError={matriculaInvalida}
                onErrorMessage={'Você não inseriu a sua matrícula corretamente!'}
            />
            Data de entrada
            <br/>
            <br/>
            <input type="date" value = { dataIngresso} onChange={(e)=> setDataIngresso(e.target.value)}/>

            <SACEInput
                label={'Matricula'}
                placeholder={'Informe a matrícula. '}
                onChange={({target}) => setEmail(target.value)}
                value={matricula}
                setMatricula={setMatricula}
                onError={matriculaInvalida}
                onErrorMessage={'Você não inseriu uma matrícula válida!'}
            />
            <SACEInput 
                label={'Login'}
                placeholder={'Informe um login. '}
                onChange={({target}) => setEmail(target.value)}
                value={login}
                setLogin={setLogin}
                onError={loginInvalido}
                onErrorMessage={'Você não inseriu um login válido!'}
            />
            <SACEInput 
                label={'Senha'}
                placeholder={'Informe uma senha. '}
                onChange={({target}) => setEmail(target.value)}
                value={login}
                setSenha={setSenha}
                onError={senhaInvalida}
                onErrorMessage={'Você inseriu uma senha inválida!'}
            />
            <SACEInput 
                label={'Confirme a sua senha'}
                placeholder={'Informe a mesma senha que a anterior. '}
                onChange={({target}) => setEmail(target.value)}
                value={confirmaSenha}
                setLogin={setConfirmaSenha}
                onError={confirmaSenhaInvalida}
                onErrorMessage={'As senhas não conferem! Favor inserir a mesma senha!'}
            />

            <Button>Enviar</Button>
            <Button>Limpar</Button>

        </Form.Group>
    );
}