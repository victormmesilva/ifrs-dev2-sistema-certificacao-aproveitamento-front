import React, { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';
import Select from 'react-select';

const defaultSelect = {label: 'Selecione a disciplina que deseja aproveitar', value: ''};
const disciplinasJSON = [
    {id: 1, nome: 'Banco de Dados'},
    {id: 2, nome: 'Desenvolvimento de Sistemas I'},
    {id: 3, nome: 'Desenvolvimento de Sistemas II'},
];

export default function DisciplinaSolicitadaInput({ disabled, setDiscSolicitada, onError, value }) {
    const [disciplinas, setDisciplinas] = useState([]);

    useEffect(() => setDisciplinas(disciplinasJSON), []);

    return (
        <Form.Group>
            <Form.Label className="mb-1">
                Disciplina solicitada
            </Form.Label>
            <Select
                id="disciplina-solicitada"
                onChange={(option) => setDiscSolicitada(option)}
                selectedOption={null}
                options={disciplinas.map(disciplina => ({ value: disciplina.id, label: disciplina.nome}))}
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