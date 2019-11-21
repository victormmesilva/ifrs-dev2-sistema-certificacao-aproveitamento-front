import React, { useState, useEffect } from 'react';
import { Alert } from 'react-bootstrap';
import { getAproveitamentos } from '../services/RequisicaoService';
import CardAproveitamento from '../components/CardAproveitamento';
import './tabelarequisicoes.css';

export default function() {
    const [requisicoes, setRequisicoes] = useState([]);
    const [alert, setAlert] = useState('');

    useEffect(() => console.log(requisicoes), [requisicoes]);
  
    useEffect(() => {
      getAproveitamentos()
        .then(result => setRequisicoes(result))
        .catch(error => setAlert({
            mensagem: error.message,
            tipo: 'danger',
          })
        );
    }, []);

    return (
      <>
        <h6>Lista de requisições de aproveitamento de estudos</h6>
        {alert && <Alert variant={alert.tipo}>{alert.mensagem}</Alert>}
        {
          requisicoes && 
          requisicoes.map(requisicao => <CardAproveitamento requisicao={requisicao} />)
        }    
      </>
    );
}