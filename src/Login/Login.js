import { Form } from 'react-bootstrap';
import React, { useState } from 'react';
import Dashboard from '../MenuInicial/Dashboard';
import axios from 'axios';
import TituloPagina from '../components/TituloPagina';

export default function Login() {

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [carregar, setCarregar] = useState(true);
  const [login, setLogin] = useState(false);



  return (
    <div className="container col-md-6">
      <TituloPagina titulo={'Login'} />
      <div classN ame="jumbotron">
        {/*this.state.isLogin == true ? <Dashboard />:""*/}
        
      </div>

    </div>

  );
}



