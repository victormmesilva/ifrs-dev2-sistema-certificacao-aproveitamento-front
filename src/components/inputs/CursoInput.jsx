import React, { useState } from 'react';
import Select from 'react-select';

const defaultSelect = {label: 'Selecione o curso', value: ''};
const cursosJSON = [
    {id: 1, nome: 'Análise e Desenvolvimento de Sistemas'},
    {id: 2, nome: 'Letras'},
    {id: 3, nome: 'Agronomia'},
];

function CursoInput(props) {
    const { setCurso } = props;
    const [cursos, setCursos] = useState(cursosJSON);

    return (
        <div className="form-group">
            <label htmlFor="curso" className="mb-1">Curso</label>
            <Select
                id="curso"
                onChange={(option) => setCurso(option)}
                selectedOption={null}
                options={cursos.map(curso => ({ value: curso.id, label: curso.nome}))}
                defaultValue={defaultSelect}
            />
        </div>
    );
}

export default CursoInput;
