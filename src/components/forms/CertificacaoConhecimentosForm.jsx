import React, { Component } from 'react';
import TituloPagina from '../TituloPagina';
import DisciplinaSolicitadaInput from '../inputs/DisciplinaSolicitadaInput';
import DisciplinaCursadaAnteriorInput from '../inputs/DisciplinaCursadaAnteriorInput';
import AnexarArquivosInput from '../inputs/anexarArquivosInput/AnexarArquivosInput';
import CursoInput from '../inputs/CursoInput';
import Axios from 'axios';
import { enviroment } from '../../enviroment';

export default class CertificacaoConhecimentosForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            curso: {},
            disciplinas: [], 
            formacaoAtividadeAnterior:""

        }
    }

    setParam(param, valor) {
        this.setState({
            [param]: valor
        });
    }

    setCurso(value) {
        this.setState({
            "curso": value,
            "disciplinas": [{}]
        });
        this.getDisciplinas(value)
    }

    getDisciplinas(value) {
        debugger;
        Axios.get(`${enviroment}/api/cursos/${value.value}/disciplinas`).then(response => {
            debugger;
            this.setParam("disciplinas", response.data)
        })
    }
    cursoInvalido() {


    }

    setDiscSolicitada(value) {
       
        debugger;

    }

    setFormacaoAtividadeAnterior(value){
        debugger
      
    }

    anexos(value){

    }

    setAnexos(){

    }

    render() {
        /*
        
        */
        return (
            <>
                <TituloPagina titulo={'Certificação de Conhecimentos'} />
                <CursoInput setCurso={(value) => this.setCurso(value)} onError={this.cursoInvalido} />

                <DisciplinaSolicitadaInput
                    curso={this.state.curso}
                    disciplinas={this.state.disciplinas ? this.state.disciplinas : []}
                    setDiscSolicitada={this.setDiscSolicitada}
                    disabled={!this.state.curso}
                    onError={this.state.discSolicitadaInvalida}
                />

                <DisciplinaCursadaAnteriorInput
                    setDiscCursadaAntes={this.setFormacaoAtividadeAnterior}
                />
                 <AnexarArquivosInput
                    anexos={this.anexos}
                    setAnexos={this.setAnexos}
                   // onError={anexosInvalidos}
                />


            </>
        );
    }
}

