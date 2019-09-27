import React from 'react';
import { Form } from 'react-bootstrap';

export default function DisciplinaCursadaAnteriorInput({ setDiscCursadaAntes, onError, value }) {
    return (
        <Form.Group>
            <Form.Label className="mb-1">Disciplina cursada anteriormente</Form.Label>
            <Form.Control 
                type="text" 
                id="disciplina-anterior" 
                placeholder="Preencha com o nome da disciplina que você cursou em outra instituição"
                onChange={({target}) => setDiscCursadaAntes(target.value)}
                value={value}
            />
            {onError && 
                <Form.Text className="text-danger">
                    O campo disciplina anterior é obrigatório.
                </Form.Text>
            }
        </Form.Group>
    );
}