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
    const [cursoInvalido, setCursoInvalido] = useState(false);

    const [discCursadaAntes, setDiscCursadaAntes] = useState('');
    const [discCursadaAntesInvalida, setdiscCursadaAntesInvalida] = useState(false);

    const [discSolicitada, setDiscSolicitada] = useState('');
    const [discSolicitadaInvalida, setdiscSolicitadaInvalida] = useState(false);

    const [anexos, setAnexos] = useState([]);
    const [anexosInvalidos, setAnexosInvalidos] = useState(false);


    const [showModal, setShowModal] = useState(false);
    const [requisicao, setRequisicao] = useState(false);

    const formatarAnexos = () => anexos.map(anexo => {
        return { id: anexo.id, file: new Blob([anexo, { type: anexo.type }]) };
    });
    
    const fazerRequisicao = (event) => {
        event.preventDefault();      
        if(!curso) setCursoInvalido(true);
        if(!discCursadaAntes) setdiscCursadaAntesInvalida(true);
        if(!discSolicitadaInvalida) setdiscSolicitadaInvalida(true);
        if(!anexos) setAnexosInvalidos(true);

        /* const requisicao = {
            idAluno: 1,
            curso: curso,
            discCursadaAntes,
            discSolicitada: discSolicitada,
            anexos: formatarAnexos(),
        };
        
        setRequisicao(requisicao);
        setShowModal(true);
        console.log(requisicao); */
    }

    const limparCampos = (event) => {
        event.preventDefault();        

    }
    
    return(
        <>
            <TituloPagina titulo={'Aproveitamento de Estudos'}/>
            
            <CursoInput setCurso={setCurso} onError={cursoInvalido}/>

            <DisciplinaSolicitadaInput 
                curso={curso}
                setDiscSolicitada={setDiscSolicitada} 
                disabled={!curso}
                onError={discSolicitadaInvalida}
            />

            <DisciplinaCursadaAnteriorInput
                setDiscCursadaAntes={setDiscCursadaAntes}
                onError={discCursadaAntesInvalida}
            />

            <AnexarArquivosInput 
                anexos={anexos} 
                setAnexos={setAnexos}
                onError={anexosInvalidos}
            />

            <div className="d-flex justify-content-end">
                <button type="reset" className="btn btn-link m-1" onClick={limparCampos}>Cancelar</button>
                <button className="btn btn-primary m-1" onClick={fazerRequisicao}>Enviar</button>
            </div>

            {showModal && <ModalConfirmarRequisicao requisicao={requisicao} setShowModal={setShowModal} showModal={showModal}/>}
        </>
    );
}
export default AproveitamentoEstudosForm;