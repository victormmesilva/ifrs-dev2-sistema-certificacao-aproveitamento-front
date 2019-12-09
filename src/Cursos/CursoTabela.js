import React from 'react';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import { Button } from 'react-bootstrap';
import API from '../base';

export default class Cursotabela extends React.Component {


    constructor() {
        super();
        this.state={
            carregardisciplinas:true
          };
      }

      listarDisciplinas(id) {
        API.get(`/cursos/${id}/disciplinas`).then((retorno)=>this.setState({carregardisciplinas:false,disciplinas:retorno.data})  );
      }


    render() {


        const inputStyle = {
            backgroundColor: "gray"
          };

          const inputStyle2 = {
            backgroundColor: "red"
          };

          

        return<div >

            <table class="table">
            <thead>
            <tr>
                <th>Id</th>
                <th>Nome</th>      
                <th>Editar</th>
                <th>excluir</th>
            </tr>
            </thead>
            <tbody>
            {this.props.itens.map((curso)=><tr key={curso.id}> 
                <td>{curso.id}</td>
                <td>{curso.nome}</td>          
                <td><Button style={inputStyle} onClick={()=>this.props.onEditar(curso)}>Selecionar</Button> </td>
                <td><Button style={inputStyle2} onClick={()=>this.props.onApagar(curso)}>Deletar</Button></td>  
            </tr> )}
            </tbody>
            </table>

            </div>
    }
}