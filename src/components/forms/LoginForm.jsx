import React, {useState, useEffect} from 'react';
import TituloPagina from '../../components/TituloPagina';
import { Form, Button } from 'react-bootstrap';
import SACEInput from '../../components/inputs/SACEInput';


export default function LoginForm (){
    const [login, setLogin] = useState(''); 
    const [loginInvalido, setLoginInvalido] = useState(false); 
    const [senha, setSenha] = useState(""); 
    const [senhaInvalida, setSenhaInvalida] = useState(false); 
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
        if(camposInvalidos()) return;
        
        setUsuario({
           login,
           senha
        });
    
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
              <Form.Group className="d-flex justify-content-end">
                    <Button variant="primary" className="btn btn-primary m-1" onClick={fazerLogin}>
                            Enviar
                    </Button>
                    <Button variant="link" className="btn btn-link m-1" onClick={limparCampos}>
                        Cancelar
                    </Button>
            </Form.Group>

        </Form.Group>
    );
}