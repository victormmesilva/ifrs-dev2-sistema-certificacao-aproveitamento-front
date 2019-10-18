import React from 'react';
import { Alert } from 'react-bootstrap';

export default function Alerta ({ mensagem, tipo, setAlert }) {
    return <Alert variant={tipo} onClose={() => setAlert(null)} dismissible>{mensagem}</Alert>;
}