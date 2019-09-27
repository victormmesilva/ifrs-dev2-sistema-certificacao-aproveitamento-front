import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import TituloPagina from '../TituloPagina';
import ModalConfirmarRequisicao from '../ModalConfirmarRequisicao';
import Blob from 'blob';
import AnexarArquivosInput from '../inputs/anexarArquivosInput/AnexarArquivosInput';
import DisciplinaSolicitadaInput from '../inputs/DisciplinaSolicitadaInput';
import DisciplinaCursadaAnteriorInput from '../inputs/DisciplinaCursadaAnteriorInput';
import CursoInput from '../inputs/CursoInput';
import { postRequisicao } from '../../services/RequisicaoService';

export default function AproveitamentoEstudosForm(){     
    const [curso, setCurso] = useState('');
    const [cursoInvalido, setCursoInvalido] = useState(false);

    const [discCursadaAntes, setDiscCursadaAntes] = useState('');
    const [discCursadaAntesInvalida, setdiscCursadaAntesInvalida] = useState(false);

    const [discSolicitada, setDiscSolicitada] = useState('');
    const [discSolicitadaInvalida, setdiscSolicitadaInvalida] = useState(false);

    const [anexos, setAnexos] = useState([]);
    const [anexosInvalidos, setAnexosInvalidos] = useState(false);
    
    const [showModal, setShowModal] = useState(false);
    const [requisicao, setRequisicao] = useState(null);

    useEffect(() => setCursoInvalido(false), [curso]);
    useEffect(() => setdiscSolicitadaInvalida(false), [discSolicitada]);
    useEffect(() => setdiscCursadaAntesInvalida(false), [discCursadaAntes]);
    useEffect(() => setAnexosInvalidos(false), [anexos]);
    useEffect(() => setShowModal(true), [requisicao]);

    const formatarAnexos = () => anexos.map(anexo => (
        { id: anexo.id, file: new Blob([anexo, { type: anexo.type }]) })
    );

    const camposInvalidos = () => {
        if(!curso) setCursoInvalido(true);
        if(!discCursadaAntes) setdiscCursadaAntesInvalida(true);
        if(!discSolicitada) setdiscSolicitadaInvalida(true);
        if(!anexos.length) setAnexosInvalidos(true);

        return ( !curso || !discCursadaAntes || !discSolicitada || !anexos.length );
    }
    
    const montarRequisicao = (event) => {
        event.preventDefault();      
        
        if(camposInvalidos()) return;

        setRequisicao({
            idAluno: 1,
            curso: curso.value,
            discSolicitada: discSolicitada.value,
            discCursadaAntes,
            anexos: formatarAnexos(),
        });      
    }

    const enviarRequisicao = async (requisicao) => {
        try {
            const requisicaoCriada = await postRequisicao(requisicao);
    
            if(requisicaoCriada) limparCampos();
            console.log(requisicaoCriada); 
        } catch (error) {
            console.log(error.message);
        }
    }

    const limparCampos = () => {
        setRequisicao(null);
        setCurso(null);
        setDiscSolicitada(null);
        setDiscCursadaAntes('');
        setAnexos([]);
    }

    return(
        <>
            <TituloPagina titulo={'Aproveitamento de Estudos'}/>
            
            <CursoInput
                value={curso}
                setCurso={setCurso} 
                onError={cursoInvalido}
            />

            <DisciplinaSolicitadaInput
                value={discSolicitada}
                curso={curso}
                setDiscSolicitada={setDiscSolicitada} 
                disabled={!curso}
                onError={discSolicitadaInvalida}
            />

            <DisciplinaCursadaAnteriorInput
                value={discCursadaAntes}
                setDiscCursadaAntes={setDiscCursadaAntes}
                onError={discCursadaAntesInvalida}
            />

            <AnexarArquivosInput                 
                anexos={anexos} 
                setAnexos={setAnexos}
                onError={anexosInvalidos}
            />

            <Form.Group className="d-flex justify-content-end">
                <Button variant="link" className="btn btn-link m-1" onClick={limparCampos}>
                    Cancelar
                </Button>
                
                <Button variant="primary" className="btn btn-primary m-1" onClick={montarRequisicao}>
                    Enviar
                </Button>
            </Form.Group>

            {(showModal && requisicao) 
                && 
                <ModalConfirmarRequisicao 
                    requisicao={requisicao} 
                    setShowModal={setShowModal} 
                    showModal={showModal}
                    enviarRequisicao={enviarRequisicao}
                />
            }
        </>
    );
}