import React, { useState, useEffect } from 'react';
import { Alert } from 'react-bootstrap';
import { getAproveitamentos } from '../services/RequisicaoService';
import CardAproveitamento from '../components/CardAproveitamento';
import './tabelarequisicoes.css';

export default function() {
  const [requisicoes, setRequisicoes] = useState([]);
  const [alert, setAlert] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getAproveitamentos()
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
      <h6>Lista de requisições de aproveitamento de estudos</h6>
      {alert && <Alert variant={alert.tipo}>{alert.mensagem}</Alert>}
      {
        isLoading 
        ? 
          <div style={{ minHeight: '300px'}} className="d-flex justify-content-center align-items-center text-primary">
            <div className="spinner-border" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        :
          requisicoes && 
          requisicoes.map(requisicao => <CardAproveitamento requisicao={requisicao} />)
      }    
    </>
  );
}