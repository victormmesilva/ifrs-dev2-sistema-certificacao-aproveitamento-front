import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import TituloPagina from '../TituloPagina';
import DisciplinaSolicitadaInput from '../inputs/DisciplinaSolicitadaInput';
import DisciplinaCursadaAnteriorInput from '../inputs/DisciplinaCursadaAnteriorInput';
import AnexarArquivosInput from '../inputs/anexarArquivosInput/AnexarArquivosInput';
import CursoInput from '../inputs/CursoInput';
import ModalConfirmarRequisicao from '../ModalConfirmarRequisicao';
import { fileToBase64 } from '../inputs/FileInpupt';
import { postRequisicao } from '../../services/RequisicaoService';
import { getDisciplinas } from '../../services/DisciplinaService';

export default function CertificacaoConhecimentosForm() {
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

    const [disciplinas, setDisciplinas] = useState({});
    const [anexosRecive, setAnexosRecive] = useState([]);

    useEffect(() => setCursoInvalido(false), [curso]);
    useEffect(() => setdiscSolicitadaInvalida(false), [discSolicitada]);
    useEffect(() => setdiscCursadaAntesInvalida(false), [discCursadaAntes]);
    useEffect(() => setAnexosInvalidos(false), [anexos]);
    useEffect(() => setShowModal(true), [requisicao]);

    useEffect(() => setDisciplinas(getDisciplinas(curso)), [curso]);

    const camposInvalidos = () => {
        if(!curso) setCursoInvalido(true);
        if(!discCursadaAntes) setdiscCursadaAntesInvalida(true);
        if(!discSolicitada) setdiscSolicitadaInvalida(true);
        if(!anexos.length) setAnexosInvalidos(true);

        return ( !curso || !discCursadaAntes || !discSolicitada || !anexos.length );
    }

    const limparCampos = () => {
        setRequisicao(null);
        setCurso(null);
        setDiscSolicitada(null);
        setDiscCursadaAntes('');
        setAnexos([]);
    }

    const tratandoAnexos = () => {
            let aux = ""; 
        this.state.anexos.forEach(element => {
            aux+=element.base64+ "@";
        });

        return aux;
    }
   
    const fazerRequisicao = async () => {
        if(camposInvalidos()) return;
   
        const requisicao = {
            formacaoAtividadeAnterior: discCursadaAntes,
            tipo: "certificacao",
            anexos: tratandoAnexos(),
            disciplinaSolicitada: {
                id: discSolicitada.value,
                nome: discSolicitada.label, 
                cargaHoraria: discSolicitada.carga, 
            }
        }
        const response = await postRequisicao(requisicao);
        /* TODO - implementar retorno pro usuário */
        console.log(response);
    }

    return (
        <>
            <TituloPagina titulo={'Certificação de Conhecimentos'} />
            
            <CursoInput 
                value={curso}
                setCurso={setCurso} 
                onError={cursoInvalido} 
            />

            <DisciplinaSolicitadaInput
                value={discSolicitada}
                disciplinas={disciplinas}
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
                filesRecive={anexosRecive}
                setFilesRecive={setAnexosRecive}
                onError={anexosInvalidos}
            />

            <Form.Group className="d-flex justify-content-end">
                <Button variant="link" className="btn btn-link m-1" onClick={limparCampos}>
                    Cancelar
                </Button>
                
                <Button variant="primary" className="btn btn-primary m-1" onClick={fazerRequisicao}>
                    Enviar
                </Button>
            </Form.Group>

            {(showModal && requisicao)
                &&
                <ModalConfirmarRequisicao 
                    requisicao={requisicao} 
                    setShowModal={setShowModal} 
                    showModal={showModal} 
                    //enviarRequisicao={enviarRequisicao}
                />
            }
        </>
    );
}

