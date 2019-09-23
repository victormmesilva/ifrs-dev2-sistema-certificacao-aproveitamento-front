import React, { useState, useEffect } from 'react';
import Blob from 'blob'
import AnexarArquivosInput from './AnexarArquivosInput';
import DisciplinaSolicitadaInput from './DisciplinaSolicitadaInput';
import DisciplinaCursadaAnteriorInput from './DisciplinaCursadaAnteriorInput';
import CursoInput from './CursoInput';
import TituloPagina from './TituloPagina';
import ModalConfirmarRequisicao from './ModalConfirmarRequisicao';

function CertificacaoConhecimentosForm(){
    const [curso, setCurso] = useState('');
    const [discCursadaAntes, setDiscCursadaAntes] = useState('');
    const [discSolicitada, setDiscSolicitada] = useState('');
    const [anexos, setAnexos] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [requisicao, setRequisicao] = useState(false);

    const formatarAnexos = () => anexos.map(anexo => {
        return { id: anexo.id, file: new Blob([anexo, { type: anexo.type }]) };
    });
    
    const fazerRequisicao = (event) => {
        event.preventDefault();        

        const requisicao = {
            idAluno: 1,
            curso: curso.value,
            discCursadaAntes,
            discSolicitada: discSolicitada.value,
            anexos: formatarAnexos(),
        };
        setRequisicao(requisicao);
        setShowModal(true);

        console.log(requisicao);
    }   

    return(
        <>
            <TituloPagina titulo={'Certificação de Conhecimentos'} />

            <CursoInput setCurso={setCurso}/>

            <DisciplinaSolicitadaInput 
                curso={curso}
                setDiscSolicitada={setDiscSolicitada} 
                disabled={!curso}
            />

            <DisciplinaCursadaAnteriorInput
                setDiscCursadaAntes={setDiscCursadaAntes}
            />
            
            <AnexarArquivosInput anexos={anexos} setAnexos={setAnexos}/>
            
            <div className="d-flex justify-content-end">
                <button type="reset" className="btn btn-link m-1">Limpar</button>
                <button className="btn btn-primary m-1" onClick={fazerRequisicao}>Enviar</button>
            </div>

            {showModal && <ModalConfirmarRequisicao requisicao={requisicao}/>}
        </>
    );
}

export default CertificacaoConhecimentosForm;