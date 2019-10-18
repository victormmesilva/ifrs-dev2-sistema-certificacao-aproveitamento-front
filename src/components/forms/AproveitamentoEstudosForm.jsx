import React, { useState, useEffect } from 'react';
import { Form, Button,  } from 'react-bootstrap';
import TituloPagina from '../TituloPagina';
import DisciplinaSolicitadaInput from '../inputs/DisciplinaSolicitadaInput';
import DisciplinaCursadaAnteriorInput from '../inputs/DisciplinaCursadaAnteriorInput';
import AnexarArquivosInput from '../inputs/anexarArquivosInput/AnexarArquivosInput';
import CursoInput from '../inputs/CursoInput';
import ModalConfirmarRequisicao from '../ModalConfirmarRequisicao';
import { postRequisicao } from '../../services/RequisicaoService';
import Alerta from '../Alerta';

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
    const [alert, setAlert] = useState(null);    
    const [requisicao, setRequisicao] = useState(null);
    const [anexosRecive, setAnexosRecive] = useState([]);

    useEffect(() => setCursoInvalido(false), [curso]);
    useEffect(() => setdiscSolicitadaInvalida(false), [discSolicitada]);
    useEffect(() => setdiscCursadaAntesInvalida(false), [discCursadaAntes]);
    useEffect(() => setAnexosInvalidos(false), [anexos]);
    useEffect(() => setShowModal(true), [requisicao]);

    const camposInvalidos = () => {
        if(!curso) setCursoInvalido(true);
        if(!discCursadaAntes) setdiscCursadaAntesInvalida(true);
        if(!discSolicitada) setdiscSolicitadaInvalida(true);
        /* if(!anexos && !anexos.length) setAnexosInvalidos(true); */

        return ( !curso || !discCursadaAntes || !discSolicitada /* || !anexos.length */ );
    }

    const limparCampos = () => {
        setRequisicao(null);
        setCurso('');
        setDiscSolicitada('');
        setDiscCursadaAntes('');
        setAnexos([]);
    }

    const tratandoAnexos = () => {
        let aux = ""; 
        anexos.forEach(element => {
            aux+=element.base64+ "@";
        });

        return aux;
    }
   
    const fazerRequisicao = async () => {
        if(camposInvalidos()) return;
        
        const requisicao = {
            formacaoAtividadeAnterior: discCursadaAntes,
            tipo: "aproveitamento",
            anexos: tratandoAnexos(),
            disciplinaSolicitada: {
                id: discSolicitada.value,
                nome: discSolicitada.label, 
                cargaHoraria: discSolicitada.carga, 
            }
        }
        setRequisicao(requisicao);
        setShowModal(true);
    }

    const enviarRequisicao = () => {
        setShowModal(false);
        
        if(postRequisicao(requisicao)){
            setAlert({
                mensagem: 'Requisição enviada com sucesso!',
                tipo: 'success'
            });
        } else {
            setAlert({
                mensagem: 'ATENÇÃO! Requisição não enviada!',
                tipo: 'danger'
            });
        }

        setTimeout(() => setAlert(null), 3000);
        limparCampos();
    }

    return (
        <>
            <TituloPagina titulo={'Aproveitamento de Estudos'} />
            
            {alert && <Alerta mensagem={alert.mensagem} tipo={alert.tipo} setAlert={setAlert}/>}

            <CursoInput 
                value={curso}
                setCurso={setCurso} 
                onError={cursoInvalido} 
            />

            <DisciplinaSolicitadaInput
                value={discSolicitada}
                setDiscSolicitada={setDiscSolicitada}
                disabled={!curso}
                onError={discSolicitadaInvalida}
                curso={curso}
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
                    enviarRequisicao={enviarRequisicao}
                />
            }
        </>
    );
}

