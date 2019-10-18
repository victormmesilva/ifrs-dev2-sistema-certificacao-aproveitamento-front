import React, { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';
import Select from 'react-select';
import { getDisciplinas } from '../../services/DisciplinaService';

const defaultSelect = {label: 'Selecione a disciplina que deseja aproveitar', value: ''};

export default function DisciplinaSolicitadaInput({ curso, disabled, setDiscSolicitada, onError, value }) {
    const [disciplinas, setDisciplinas] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await getDisciplinas(curso);
            
            setDisciplinas(result);
        }
        setDiscSolicitada('');
        setDisciplinas([]);
        
        curso && fetchData();
    }, [curso]);

    return (
        <Form.Group>
            <Form.Label className="mb-1">
                Disciplina solicitada
            </Form.Label>
            <Select
                onChange={(option) => setDiscSolicitada(option)}
                selectedOption={null}
                options={disciplinas && disciplinas.length && disciplinas.map(disciplina => ({ value: disciplina.id, label: disciplina.nome}))}
                value={value || defaultSelect}
                isDisabled={disabled}
            />
            {onError && 
                <Form.Text className="text-danger">
                    O campo disciplina solicitada é obrigatório.
                </Form.Text>
            }
        </Form.Group>
    );
}