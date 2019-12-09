import React from 'react';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import { Button } from 'react-bootstrap';

export default class DisciplinaTabela extends React.Component {

    render() {


        const inputStyle = {
            margin: "0px 0px 10px 40%",
            width: "400px",
            padding: "10px",
            fontFamily: "Arial"
          };

        return<div style={inputStyle}>

            <table class="table">
            <thead>
            <tr>
                <th>Id</th>
                <th>Nome</th>      
                <th>cargaHoraria</th>
            </tr>
            </thead>
            <tbody>
            {this.props.itens.map((disciplina)=><tr key={disciplina.id}> 
                <td>{disciplina.id}</td>
                <td>{disciplina.nome}</td>  
                <td>{disciplina.cargaHoraria}</td>      
              
            </tr> )}
            </tbody>
            </table>

            </div>
    }
}