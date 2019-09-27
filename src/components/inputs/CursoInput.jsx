import React, { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';
import Select from 'react-select';

const defaultSelect = {label: 'Selecione o seu curso', value: ''};
const cursosJSON = [
    {id: 1, nome: 'Análise e Desenvolvimento de Sistemas'},
    {id: 2, nome: 'Letras'},
    {id: 3, nome: 'Agronomia'},
];

export default function CursoInput({ setCurso, onError, value }) {
    const [cursos, setCursos] = useState(cursosJSON);

    useEffect(() => setCursos(cursosJSON), []);

    return (
        <Form.Group>
            <Form.Label className="mb-1">Curso</Form.Label>
            <Select
                value={value || defaultSelect}
                onChange={(option) => setCurso(option)}
                selectedOption={null}
                options={cursos.map(curso => ({ value: curso.id, label: curso.nome}))}
            />
            {onError && 
                <Form.Text className="text-danger">
                    O campo curso é obrigatório.
                </Form.Text>
            }
        </Form.Group>
    );
}