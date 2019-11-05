import React, {useState} from 'react';
import TituloPagina from '../../components/TituloPagina';
import { Form } from 'react-bootstrap';
import SACEInput from '../../components/inputs/SACEInput';


export default function Cadastro(){
    const [matricula, setMatricula] = useState(''); 
    const [matriculaInvalida, setMatriculaInvalida] = useState(false); 

    const [tipo] = useState("");

    const [dataIngresso, setDataIngresso] = useState(""); 
    const [dataIngressoInvalida, setDataIngressoInvalida] = useState(false); 
    
    const [senha, setSenha] = useState(""); 
    const [senhaInvalida, setSenhaInvalida] = useState(false); 
    
    const [nome, setNome] = useState(""); 
    const [nomeInvalido, setNomeInvalido] = useState(false);

    const [login, setLogin] = useState(""); 
    const [loginInvalido, setLoginInvalido] = useState(false); 
    
    const [novaSenha, setNovaSenha] = useState(""); 
    const [novaSenhaInvalida, setNovaSenhaInvalida] = useState(false); 

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
                onError={formacaoAtividadeAnteriorInvalida}
                onErrorMessage={'O campo formação ou atividade é obrigatório.'}
            />
        </Form.Group>
    );
}