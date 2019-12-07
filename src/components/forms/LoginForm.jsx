import React, {useState, useEffect} from 'react';
import TituloPagina from '../../components/TituloPagina';
import { Form, Button } from 'react-bootstrap';
import SACEInput from '../../components/inputs/SACEInput';
import { postLogin } from '../../services/LoginService';
import { Link } from "react-router-dom";

export default function LoginForm (){
    const [login, setLogin] = useState(''); 
    const [loginInvalido, setLoginInvalido] = useState(false); 
    const [senha, setSenha] = useState(""); 
    const [senhaInvalida, setSenhaInvalida] = useState(false);
    const[showModal, setShowModal] = useState('')
    const [alert, setAlert] = useState(null); 
    const [camposValidos, setCamposValidos] = useState(false)
    const [camposInvalidos, setCamposInvalidos] = useState(false)
    const [usuario, setUsuario] = useState(null);
    useEffect(() => setLoginInvalido(false), [login]);
    useEffect(() => setSenhaInvalida(false), [senha]);

    const limparCampos = () => {
        setLogin('');
        setSenha('');
       
    }

    const fazerLogin = async () => {
        setUsuario({
           login,
           senha
        });
    }

    const enviarLogin = () => {
        setShowModal(false);
        setUsuario({
            login,
            senha
         });
        
        if(postLogin(usuario)){
            setAlert({
                mensagem: 'login realizado com sucesso!',
                tipo: 'success'
            });
        } else {
            setAlert({
                mensagem: 'ATENÇÃO! login não realizado!',
                tipo: 'danger'
            });
        }

        setTimeout(() => setAlert(null), 3000);
        limparCampos();
    }
    
    return(
        <Form.Group className="container col-md-6" style={{position:"relative", top:"60px"}}>
            <SACEInput
                label={'Login'}
                placeholder={'Informe o seu Login. '}
                onChange={({target}) => setLogin(target.value)}
                value={login}
                setSenha={setLogin}
                onError={loginInvalido}
                onErrorMessage={'Você não inseriu o seu login corretamente!'}
            />
            <SACEInput
                label={'Senha'}
                placeholder={'Informe o sua senha. '}
                onChange={({target}) => setSenha(target.value)}
                value={senha}
                setEmail={setSenha}
                onError={senhaInvalida}
                onErrorMessage={'Você não inseriu o sua senha corretamente!'}
            />
            <div className="row">
            <Link to="/cadastro-aluno" >Aluno, não é Cadstrado?</Link>
            <Link to="#" style={{position:'relative', left:'45%'}}>Esqueceu a sua senha?</Link>

            </div>
              <Form.Group className="d-flex justify-content-end" style={{position:'relative', top:'50px', right:'30%'}}>
                    <Button variant="primary" className="btn btn-primary m-1" onClick={enviarLogin}>
                            Enviar
                    </Button>
                    <Button variant="link" className="btn btn-link m-1" onClick={limparCampos}>
                        Cancelar
                    </Button>
            </Form.Group>
        </Form.Group>
    );
}