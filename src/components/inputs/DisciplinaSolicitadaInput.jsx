import React, { Component, useEffect } from 'react';
import Select from 'react-select';
import Axios from 'axios';
import { enviroment } from '../../enviroment';

export default class DisciplinaSolicitadaInput extends Component {
    constructor(props) {
        debugger; 
        super(props);
        this.state = {
            curso: {}, disciplinas: []
        }
    }

    defaultSelect = { label: 'Selecione a disciplina que deseja aproveitar', value: '' };


    listarTodasDisciplinas(value) {
        debugger;
        Axios.get(`${enviroment}/api/cursos/${value}/disciplinas`).then(response => {
            this.setState({
                disciplinas:response.data
            })
        })
    }

    setDiscSolicitada(option){

    }

    

    render() {
        return (
            <div className="form-group">
                <label htmlFor="disciplina-solicitada" className="mb-1">Disciplina solicitada</label>
                <Select
                    id="disciplina-solicitada"
                    onChange={(option) => this.setDiscSolicitada(option)}
                    selectedOption={null}   
                    options={this.state.disciplinas.map(disciplina => ({ value: disciplina.id, label: disciplina.nome }))}
                    defaultValue={this.defaultSelect}
                    isDisabled={this.disabled}
                />
            </div>
        );
    }

}


