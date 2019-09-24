import React, { useState } from 'react';
import CertificacaoConhecimentosForm from '../components/forms/CertificacaoConhecimentosForm';
import AproveitamentoEstudosForm from '../components/forms/AproveitamentoEstudosForm';

const getFormulario = (tipo) => {
    switch(tipo){
        case 'CERTIFICACAO':
            return <CertificacaoConhecimentosForm />;
        case 'APROVEITAMENTO':
            return <AproveitamentoEstudosForm />;
        default:
            return null;
    }
}

function Requisicoes(){
    const [tipoRequisicao, setTipoRequisicao] = useState('');

    return(
        <>
            <div className="form-group mx-auto col-6 mb-4 mt-3">
                <label htmlFor="select-requisicao" className="mb-1">Selecione o tipo de requisição</label>
                <select id="select-requisicao"
                        className="form-control" 
                        onChange={({target}) => setTipoRequisicao(target.value)}
                >
                    <option value=''>...</option>
                    <option value='APROVEITAMENTO'>Aproveitamento de Estudos</option>
                    <option value='CERTIFICACAO'>Certificação de Conhecimentos</option>
                </select>
            </div>

            {tipoRequisicao && <form className="col-10 bg-light mx-auto rounded p-4">{getFormulario(tipoRequisicao)}</form> }
        </>
    );
}   

export default Requisicoes;