import React, { useState, useEffect } from 'react';
import { Alert } from 'react-bootstrap';
import { getCertificacoes } from '../services/RequisicaoService';
import CardCertificacao from '../components/CardCertificacao';
import './tabelarequisicoes.css';

export default function() {
    const [requisicoes, setRequisicoes] = useState([]);
    const [alert, setAlert] = useState('');
  
    useEffect(() => {
      getCertificacoes()
        .then(result => setRequisicoes(result))
        .catch(error => setAlert({
            mensagem: error.message,
            tipo: 'danger',
          })
        );
    }, []);

    return (
      <>
        <h6>Lista de requisições de certificação de estudos</h6>
        {alert && <Alert variant={alert.tipo}>{alert.mensagem}</Alert>}
        {
          requisicoes && 
          requisicoes.map(requisicao => <CardCertificacao requisicao={requisicao} />)
        }    
      </>
    );
}