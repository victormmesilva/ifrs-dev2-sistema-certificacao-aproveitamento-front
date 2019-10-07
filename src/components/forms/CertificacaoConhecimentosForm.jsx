import React, { Component } from 'react';
import TituloPagina from '../TituloPagina';
import DisciplinaSolicitadaInput from '../inputs/DisciplinaSolicitadaInput';
import DisciplinaCursadaAnteriorInput from '../inputs/DisciplinaCursadaAnteriorInput';
import AnexarArquivosInput from '../inputs/anexarArquivosInput/AnexarArquivosInput';
import CursoInput from '../inputs/CursoInput';
import Axios from 'axios';
import { enviroment } from '../../enviroment';
import { fileToBase64 } from '../../base64';


export default class CertificacaoConhecimentosForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            curso: {},
            disciplinas: [],
            formacaoAtividadeAnterior: "",
            anexos: [],
            disciplina: {},
            anexosRecive:[]
            

        }
    }

    limparCampos() { window.location.reload(); }

    setParam(param, valor) {
        this.setState({
            [param]: valor
        });
    }

    setCurso(value) {
        this.setState({
            "curso": value,

        });
        this.getDisciplinas(value);
    }

    getDisciplinas(value) {
        Axios.get(`${enviroment}/api/cursos/${value.value}/disciplinas`).then(response => {
            this.setParam("disciplinas", response.data)
        })
    }
    cursoInvalido() {
    }

    setDiscSolicitada(value) {
        this.setParam("disciplina", value);
    }

    setDiscplinas(value) {
        this.setParam("disciplinas", value);
    }

    validaFormacaoAtividadeAnterior(value) {
        if (value.formacaoAtividadeAnterior == null || value.formacaoAtividadeAnterior == "") {
            return { status: false, mensage: "Você não pode inserir a formação atividade anterior como um campo nulo ou vazio. " };
        }
        if (value.anexos == null || value.anexos == []) {
            return { status: false, mensage: "Você não pode fazer a requisição sem fornecer os anexos.  " };
        }
        if (value.disciplinaSolicitada == null || value.disciplinaSolicitada == {}) {
            return { status: false, mensage: "Você não pode fazer a requisição sem fornecer a disciplina.  " };
        }
        return {status:true, message:"OK"}
    }

    tratandoAnexos(){
            let aux = ""; 
        this.state.anexos.forEach(element => {
            aux+=element.base64+ "@";
        });

        return aux;
    }
   
    fazerRequisicao() {
 
        let requisicao = {
            id:"",
            formacaoAtividadeAnterior: this.state.formacaoAtividadeAnterior,
            tipo: "certificacao",
            criterioAvaliacao:"",
            deferido:false,
            dataRequisicao: "",
            anexos: this.tratandoAnexos(),
            disciplinaSolicitada: {
                id: this.state.disciplina.value,
                nome: this.state.disciplina.label, 
                cargaHoraria: this.state.disciplina.carga, 
            }
        }

       let returnObject =  this.validaFormacaoAtividadeAnterior(requisicao);

       if(returnObject.status === false){

       }else{

        debugger; 

           Axios.post(`${enviroment}/api/requisicoes/`,{
            tipo: "certificacao",
            id:"",
            formacaoAtividadeAnterior: this.state.formacaoAtividadeAnterior,
            criterioAvaliacao:"",
            deferido:false,
            dataRequisicao: "",
            anexos: this.tratandoAnexos(),
            disciplinaSolicitada: {
                id: this.state.disciplina.value,
                nome: this.state.disciplina.label, 
                cargaHoraria: this.state.disciplina.carga, 
            }
        }).then(response=>{
               debugger;
               console.log("SALVOU A REQUISICAO COMO ESPERADO ===>", response); 
           }).catch(error=> {console.log("ERRO====>>>" + error)
                debugger 
        }); 
       } 
    }

    setDisciplinas(value) {
        this.setParam("disciplinas", value)
    }

    setFormacaoAtividadeAnterior(value) {
        this.setState({ "formacaoAtividadeAnterior": value })
    }

    setAnexos(anexos) {

        this.setState({ "anexos": anexos })
    }

    setAnexosRecive(anexos){
        this.setState({ "anexosRecive": anexos })
    }

    render() {

        return (
            <>
                <TituloPagina titulo={'Certificação de Conhecimentos'} />
                <CursoInput setCurso={(value) => this.setCurso(value)} onError={this.cursoInvalido} />

                <DisciplinaSolicitadaInput
                    curso={this.state.curso}
                    disciplinas={this.state.disciplinas ? this.state.disciplinas : []}
                    setDiscSolicitada={(value) => this.setDiscSolicitada(value)}
                    disabled={!this.state.curso}
                    onError={this.state.discSolicitadaInvalida}
                />

                <DisciplinaCursadaAnteriorInput
                    setDiscCursadaAntes={(value) => this.setFormacaoAtividadeAnterior(value)}
                />
                <AnexarArquivosInput
                    anexos={this.state.anexos}
                    setAnexos={(anexos) => this.setAnexos(anexos)}
                    filesRecive = {this.state.anexosRecive}
                    setFilesRecive = {(anexosRecive) => this.setAnexosRecive(anexosRecive)}

                // onError={anexosInvalidos}
                />

                <div className="d-flex justify-content-end">
                    <button type="reset" className="btn btn-link m-1" onClick={() => this.limparCampos()}>Cancelar</button>
                    <button type="submit"className="btn btn-primary m-1" onClick={() => this.fazerRequisicao()}>Enviar</button>
                </div>

                {/*showModal && <ModalConfirmarRequisicao requisicao={requisicao} setShowModal={setShowModal} showModal={showModal} />*/}



            </>
        );
    }
}

