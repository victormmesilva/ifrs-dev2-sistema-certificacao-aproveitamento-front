import React, {Component} from 'react';
import DisciplinaForm from './DisciplinaForm'
import API from '../base';
import DisciplinaTabela from "./DisciplinaTabela";

export default class DisciplinaView extends Component {

    constructor() {
      super();
      this.state={
          carregar:true, 
          carregardisciplinas:true,
        };
    }

    componentDidMount() {
        this.listarCursos();
        
    }

    listarCursos() {
        API.get("/cursos").then((retorno)=>this.setState({carregar:false,cursos:retorno.data})  );
    }

    listarDisciplinas() {
        API.get("/cursos").then((retorno)=>this.setState({carregardisciplinas:false,disciplinas:retorno.data})  );
    }

    cadastrar(disciplina) {
        API.post(`/cursos/${disciplina.curso.id}/disciplinas`, disciplina).then();
    }


    render() {

        return <div>
            
            {this.state.carregar?"": 
            <DisciplinaForm 
                cursos={this.state.cursos}
                onCadastrar={(nome)=>this.cadastrar(nome)}
            /> 
            }

            {this.state.carregardisciplinas?"": 
                <DisciplinaTabela itens={this.state.disciplinas} />
            }


        </div>
    }
} 

