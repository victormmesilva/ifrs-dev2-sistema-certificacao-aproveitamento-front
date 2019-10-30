import React, { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';
import Select from 'react-select';
import { getCursos } from '../../services/CursoService';

const defaultSelect = {label: 'Selecione o seu curso', value: ''};

export default function CursoInput({ setCurso, onError, value }) {
    const [cursos, setCursos] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await getCursos();
            setCursos(result);
        }
                
        fetchData();
    }, []);

    return (
        <Form.Group>
            <Form.Label className="mb-1">Curso</Form.Label>
            <Select
                value={value || defaultSelect}
                selectedOption={null}
                options={cursos && cursos.length && cursos.map(curso => ({ value: curso.id, label: curso.nome}))}
                onChange={(option) => setCurso(option)}
            />
            {onError && 
                <Form.Text className="text-danger">
                    O campo curso é obrigatório.
                </Form.Text>
            }
        </Form.Group>
    );
}