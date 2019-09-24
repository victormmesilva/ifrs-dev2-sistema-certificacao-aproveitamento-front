import React, { useState, useEffect } from 'react';
import Select from 'react-select';

const defaultSelect = {label: 'Selecione a disciplina que deseja aproveitar', value: ''};
const disciplinasJSON = [
    {id: 1, nome: 'Banco de Dados'},
    {id: 2, nome: 'Desenvolvimento de Sistemas I'},
    {id: 3, nome: 'Desenvolvimento de Sistemas II'},
];

function DisciplinaSolicitadaInput(props) {
    const { curso, disabled, setDiscSolicitada } = props;
    const [disciplinas, setDisciplinas] = useState(disciplinasJSON);

    useEffect(() => {
        if(curso === ''){
            setDiscSolicitada('');
        } else {
            setDisciplinas(disciplinasJSON);
        }    
    }, [curso, setDiscSolicitada]);

    return (
        <div className="form-group">
            <label htmlFor="disciplina-solicitada" className="mb-1">Disciplina solicitada</label>
            <Select
                id="disciplina-solicitada"
                onChange={(option) => setDiscSolicitada(option)}
                selectedOption={null}
                options={disciplinas.map(disciplina => ({ value: disciplina.id, label: disciplina.nome}))}
                defaultValue={defaultSelect}
                isDisabled={disabled}
            />
        </div>
    );
}

export default DisciplinaSolicitadaInput;
