import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import CertificacaoConhecimentosForm from '../components/forms/CertificacaoConhecimentosForm';
import AproveitamentoEstudosForm from '../components/forms/AproveitamentoEstudosForm';

const CERTIFICACAO = 'CERTIFICACAO';
const APROVEITAMENTO = 'APROVEITAMENTO';

const getFormulario = (tipo) => {
    switch(tipo){
        case CERTIFICACAO:
            return <CertificacaoConhecimentosForm />;
        case APROVEITAMENTO:
            return <AproveitamentoEstudosForm />;
        default:
            return null;
    }
}

export default function Requisicoes(){
    const [tipoRequisicao, setTipoRequisicao] = useState('');

    return(
        <>
            <Form.Group className="mx-auto col-6 mb-4 mt-3">
                <Form.Label className="mb-1">
                    Selecione o tipo de requisição
                </Form.Label>
                <Form.Control 
                    as="select"
                    onChange={({target}) => setTipoRequisicao(target.value)}
                >
                    <option value=''>...</option>
                    <option value={APROVEITAMENTO}>Aproveitamento de Estudos</option>
                    <option value={CERTIFICACAO}>Certificação de Conhecimentos</option>
                </Form.Control>
            </Form.Group>

            {tipoRequisicao && 
                <Form className="col-10 bg-light mx-auto rounded p-4">
                    {getFormulario(tipoRequisicao)}
                </Form> 
            }
        </>
    );
}