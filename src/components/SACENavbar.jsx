import React from 'react';
import { Navbar, Nav} from 'react-bootstrap';
import { Link } from "react-router-dom";

function SACELink({ to, label }) {
    return (
        <Link 
            to={to} 
            style={{ 
                marginRight:'10px',
                whiteSpace:'nowrap',
            }}
        >
            {label}
        </Link>
    );
} 

export default function SACENavbar() {
    return (
        <Navbar bg="light" expand="lg">
            <Link to={'/'}>
                <Navbar.Brand>{'SACE'}</Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <SACELink to={'/'} label={'Início'}/>
                    <SACELink to={'/minhas-requisicoes'} label={'Minhas requisições'}/>
                    <SACELink to={'/nova-requisicao'} label={'Nova requisição'}/>
                    <SACELink to={'/listar-cursos'} label={' Listar cursos'}/>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}