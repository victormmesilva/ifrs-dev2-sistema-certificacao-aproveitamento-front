import { Form } from 'react-bootstrap';
import Requisicoes from '../pages/requisicoes/Requisicoes'
import Curso from '../Cursos/CursoView'
import Disciplina from '../Disciplinas/DisciplinaView'
import React, { Component } from 'react';
import axios from 'axios';

export default class DashBoard extends Component{

    constructor(props) {
        super(props);
    
        this.state = {
         
            telaSelecionada: ""

        }

    }

    Logar(Usuario) {
      axios.post("/api/usuarios", Usuario).then((retorno)=>
      this.setState({carregar:false,usuario:retorno.data}));
    }

    viewCurso() {
      this.setState({telaSelecionada: "curso" });
    }

    viewDisciplina() {
      this.setState({telaSelecionada: "disciplina" });
    }

    viewRequisicoes() {
      this.setState({telaSelecionada: "requisicao" });
    }

    render() {

      const btnRequisicao = {
        margin: "0px 2px 75px 40%",
        color: "white",
        backgroundColor: "DodgerBlue",
        padding: "10px",
        fontFamily: "Arial"
      };

      const btnCurso = {
        color: "white",
        backgroundColor: "DodgerBlue",
        padding: "10px",
        fontFamily: "Arial"
      };


      return(
       <div >

        <button style={btnRequisicao} onClick={this.viewRequisicoes.bind(this)}  >Requisicões</button> 
        <button style={btnCurso} onClick={this.viewCurso.bind(this)}  >Adicionar curso</button> 
        <button style={btnCurso} onClick={this.viewDisciplina.bind(this)}  >Adicionar disciplina</button> 

        {this.state.telaSelecionada=="requisicao"?<Requisicoes/>: ""}    
        {this.state.telaSelecionada=="curso"?<Curso /> : ""} 
        {this.state.telaSelecionada=="disciplina"?<Disciplina /> : ""} 

       </div>
      );
    }
}


