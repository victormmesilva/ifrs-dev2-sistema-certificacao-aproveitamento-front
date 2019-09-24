import React from 'react';
import './ModalConfirmarRequisicao.css';

const ModalConfirmarRequisicao = props => {
    const { requisicao, fazerRequisicao, setShowModal, showModal} = props;
    const { curso, discSolicitada, discCursadaAntes } = requisicao;

    return (
        <>
            <div className={`modal fade ${showModal && 'show'}`} id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Confirmar requisição?</h5>
                        </div>
                        <div className="modal-body">
                            <>
                                <p>{`Curso: ${curso.label}`}</p>
                                <p>{`Disciplina que será aproveitada: ${discSolicitada.label}`}</p>
                                <p>{`Disciplina cursada em outra instituição: ${discCursadaAntes}`}</p>
                            </>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>Cancelar</button>
                            <button type="button" className="btn btn-primary">Confirmar</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ModalConfirmarRequisicao;