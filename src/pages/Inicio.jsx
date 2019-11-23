import React from 'react';
import TituloPagina from '../components/TituloPagina';
import Login from '../Login/Login';
import { relative } from 'path';
import { Link } from 'react-router-dom'

export default function Inicio() {
  const path = './images/APROVEITAMENTO-ESTUDOS.png'; 

  const  toLoginPage = function(){
      return 
  }

  return (
    <div style={{position:'relative', top:"50px", left :'13%'}}>
      <div className="card" style={{width:"50rem", position:relative}}>

        <img src={path} className="card-img-top" alt="..." />
        <div className="card-body"style={{position:'relative'}}>
          <TituloPagina titulo={'Portal de Requisição de Aproveitamento de Matrícula ou Certificação de Conhecimentos.'} />
          <p className="card-text" style={{textAlign:'justify'}}>Bem vindo ao nosso portal de solicitação de aproveitamento de estudos ou certificação de conhecimento. 
          Caso você necessite de uma breve explicação sobre o sistema, favor seguir o passo-à-passo contido no corpo desta página. Do contrário, 
          basta você clicar no botão a baixo para ser redirecionado a página de login da aplicação. </p>
          <br/>
          <br/>
          <Link to="/login" className="btn btn-primary">Login </Link>
        </div>
      </div>
    </div>
  );
}
