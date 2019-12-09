import React, {Component} from 'react';
import CursoForm from './CursoForm'
import API from '../base';
import CursoTabela from "./CursoTabela";
import DisciplinaTabela from "../Disciplinas/DisciplinaTabela"

export default class CursoView extends Component {

    constructor() {
      super();
      this.state={
          carregar:true, 
          carregardisciplinas:true,
          cursoParaEditar:null, 
          tela:"Criar novo evento",
          telaPesquisa:"Pesquisar evento",
          curso:this.state = {}
        };
    }

    componentDidMount() {
        this.listarCursos();
    }

    listarCursos() {
        API.get("/cursos").then((retorno)=>this.setState({carregar:false,cursos:retorno.data,cursoParaEditar:null})  );
    }

    cadastrar(nome) {
        API.post("/cursos", nome).then(()=>this.listarCursos());
    }

    atualizar(curso) {
        API.put(`/cursos/${this.state.cursoParaEditar.id}`, this.state.cursoParaEditar).then(()=>this.listarCursos());
      }
  

    apagar(curso) {
        API.delete(`/cursos/${curso.id}`).then(()=>this.listarCursos(), );
      }

      listarDisciplinas(curso) {
        API.get(`/cursos/${curso.id}/disciplinas`).then((retorno)=>this.setState({carregardisciplinas:false,disciplinas:retorno.data})  );
    }

      editar(curso) {
        this.setState({cursoParaEditar:this.state = {
          id:curso.id,
          nome:curso.nome
        }});

        this.listarDisciplinas(curso);
        
      }
  
      cancelar() {
        this.setState({cursoParaEditar:null});
      }

    handleChangeCurso(event) {
        this.setState({cursoParaEditar:this.state = {
          id:this.state.cursoParaEditar.id+0,
          nome:event.target.value
        }});
    }


    render() {

      const inputStyle = {
        margin: "0px 0px 10px 30%",
        width: "400px",
        padding: "10px",
        fontFamily: "Arial"
      };

      const btnCadastrar = {
    
        padding: "10px",
        fontFamily: "Arial"
      };

        return <div >
            
            {this.state.cursoParaEditar == null? <CursoForm onCadastrar={(nome)=>this.cadastrar(nome)}/>: 
            <div>
                <br></br>
                <input style={inputStyle} value={this.state.cursoParaEditar.nome} onChange={this.handleChangeCurso.bind(this) }/>
                <button style={btnCadastrar} onClick={() => this.atualizar()}>{"Atualizar"}</button>
                <button style={btnCadastrar} onClick={() => this.cancelar()}>{"Cancelar"}</button>

            </div>
            }

            <br></br>
            {this.state.carregar?"": 
                <CursoTabela itens={this.state.cursos} 
                onEditar={(curso)=>this.editar(curso)}
                onApagar={(curso)=>this.apagar(curso)}/>
            }


                <br></br>
                {this.state.carregardisciplinas?"": 
                <DisciplinaTabela itens={this.state.disciplinas} />
                }

            

        </div>
      }
  


  


}
