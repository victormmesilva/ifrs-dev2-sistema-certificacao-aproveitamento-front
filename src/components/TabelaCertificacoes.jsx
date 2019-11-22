import React, { useState, useEffect } from 'react';
import { Alert } from 'react-bootstrap';
import { getCertificacoes } from '../services/RequisicaoService';
import CardCertificacao from '../components/CardCertificacao';
import './tabelarequisicoes.css';

export default function() {
    const [requisicoes, setRequisicoes] = useState([]);
    const [alert, setAlert] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
      setIsLoading(true);
      getCertificacoes()
        .then(result => {
          setRequisicoes(result);
          setIsLoading(false);
        })
        .catch(error => {
          setAlert({
            mensagem: error.message,
            tipo: 'danger',
          });
          setIsLoading(false);
        });
    }, []);

    return (
      <>
        <h6>Lista de requisições de certificação de estudos</h6>
        {alert && <Alert variant={alert.tipo}>{alert.mensagem}</Alert>}
          {
            isLoading 
            ? 
              <div style={{ minHeight: '300px'}} className="d-flex align-items-center justify-content-center text-primary">
                <div className="spinner-border" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
              </div>
            :
              requisicoes && 
              requisicoes.map(requisicao => <CardCertificacao requisicao={requisicao} />)
          }    
      </>
    );
}