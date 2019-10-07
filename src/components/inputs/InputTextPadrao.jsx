import React from 'react';

function InputTextPadrao (props) {
    const { setInputTextPadrao } = props;

    return (
        <div className="form-group">
            <label htmlFor="disciplina-anterior" className="mb-1">Certificação </label>
            <input 
                type="text" 
                className="form-control" 
                id="input-text-padrao" 
                placeholder="Descreva um pouco do conteúdo e como você conseguiu adquirir (cursos, palestras, treinamentos, etc)."
                onChange={({target}) => setInputTextPadrao(target.value)}
            />
        </div>
    );
}

export default DisciplinaCursadaAnteriorInput;