import React, { Component } from 'react';
import Select from 'react-select';
import Axios from 'axios';
import { enviroment } from '../../enviroment';

export default class CursoInput extends Component {
    defaultSelect = {label: 'Selecione o curso', value: ''};
    constructor(props){
        super(props);  
        this.state = {
            cursoSelecionado:"", 
            cursos:[], 
            disciplinas:[]

        }
    } 

    setCurso(option){
        debugger ;
        this.props.setCurso(option);
    }

   /* setDisciplinas(option){
        Axios.get(`${enviroment}/api/cursos/${option.id}/disciplinas`).then(response =>{
            this.setState({
                disciplinas: response.data
            })
        }).catch(error => console.log(error))
     
    }*/

    carregarTodosOsCursos(){
        Axios.get(`${enviroment}/api/cursos`).then(response=> {
            this.setState({
                cursos: response.data
            })
            console.log(response); 
        }).catch(error=>{
            console.log(error); 
        })
    }

    componentDidMount(){
        this.carregarTodosOsCursos(); 
    }

render(){
    return (
        <div className="form-group">
            <label htmlFor="curso" className="mb-1">Curso</label>
            <Select
                id="curso"  
                onChange={(option) => this.setCurso(option)}
                selectedOption={null}
                options={this.state.cursos?this.state.cursos.map(curso => ({ value: curso.id, label: curso.nome})):""}
                defaultValue={this.defaultSelect}
            />
        </div>
    );
    
}
}
  


