import React, { Component } from 'react';
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
 
    render() {
        return (
            <div className="form-group">
                <label htmlFor="disciplina-solicitada" className="mb-1">Disciplina solicitada</label>
                <Select
                    id="disciplina-solicitada"
                    onChange={(option) => this.props.setDiscSolicitada(option)}
                    selectedOption={null}   
                    options={this.props.disciplinas?this.props.disciplinas.map(disciplina => ({ value: disciplina.id, label: disciplina.nome })):""}
                    defaultValue={this.defaultSelect}
                    isDisabled={this.disabled}
                />
            </div>
        );
    }

}


