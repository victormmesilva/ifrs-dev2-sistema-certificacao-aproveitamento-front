import React, { useState } from 'react';
import TituloPagina from '../TituloPagina';
import ModalConfirmarRequisicao from '../modal/ModalConfirmarRequisicao';
import Blob from 'blob';
import AnexarArquivosInput from '../inputs/anexarArquivosInput/AnexarArquivosInput';
import DisciplinaSolicitadaInput from '../inputs/DisciplinaSolicitadaInput';
import DisciplinaCursadaAnteriorInput from '../inputs/DisciplinaCursadaAnteriorInput';
import CursoInput from '../inputs/CursoInput';

function AproveitamentoEstudosForm(){     
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
            curso: curso,
            discCursadaAntes,
            discSolicitada: discSolicitada,
            anexos: formatarAnexos(),
        };
        setRequisicao(requisicao);
        setShowModal(true);

        console.log(requisicao);
    }

    const limparCampos = (event) => {
        event.preventDefault();        

    }

    return(
        <>
            <TituloPagina titulo={'Aproveitamento de Estudos'}/>
            
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
                <button type="reset" className="btn btn-link m-1" onClick={limparCampos}>Cancelar</button>
                <button className="btn btn-primary m-1" onClick={fazerRequisicao}>Enviar</button>
            </div>

            {showModal && <ModalConfirmarRequisicao requisicao={requisicao} setShowModal={setShowModal} showModal={showModal}/>}
        </>
    );
}

export default AproveitamentoEstudosForm;