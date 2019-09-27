import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import './ModalConfirmarRequisicao.css';

const ModalConfirmarRequisicao = props => {
    const { requisicao, enviarRequisicao, setShowModal, showModal} = props;

    return (
        <>
            <Modal show={showModal}>
                <Modal.Header closeButton>
                <Modal.Title>Confirmar requisição?</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {JSON.stringify(requisicao)}
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={() => setShowModal(false)}>
                    Cancelar
                </Button>
                <Button variant="primary" onClick={() => enviarRequisicao(requisicao) && setShowModal(false)}>
                    Confirmar
                </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalConfirmarRequisicao;