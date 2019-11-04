import React, {Component} from 'react';
import CursoForm from './CursoForm'
import API from '../base';

export default class CursoView extends Component {

    constructor() {
      super();
      this.state={
          carregar:true, 
          eventoParaEditar:null, 
          tela:"Criar novo evento",
          telaPesquisa:"Pesquisar evento"
        };
    }

    cadastrar(nome) {
        API.post("/cursos", nome).then();
    }


    render() {

        return <div>
            
            <CursoForm 
                
                onCadastrar={(nome)=>this.cadastrar(nome)}
            />    
        </div>
      }
  


  


}
