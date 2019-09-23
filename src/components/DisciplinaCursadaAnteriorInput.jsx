import React from 'react';

function DisciplinaCursadaAnteriorInput(props) {
    const { setDiscCursadaAntes } = props;

    return (
        <div className="form-group">
            <label htmlFor="disciplina-anterior" className="mb-1">Disciplina cursada anteriormente</label>
            <input 
                type="text" 
                className="form-control" 
                id="disciplina-anterior" 
                onChange={({target}) => setDiscCursadaAntes(target.value)}
            />
        </div>
    );
}

export default DisciplinaCursadaAnteriorInput;