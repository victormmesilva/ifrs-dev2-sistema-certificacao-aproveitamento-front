import React, { useState, useEffect} from 'react';
import CursoForm from './CursoForm'
import API from '../base';
import CursoTabela from "./CursoTabela";
import DisciplinaTabela from "../Disciplinas/DisciplinaTabela";
import { 
  getCursos,
  postCurso,
  putCurso,
  deleteCurso,
} from "../services/CursoService";

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

export default function CursoView() {
  const [carregar, setCarregar] = useState(true);
  const [carregarDisciplinas, setCarregarDisciplinas] = useState(true);
  const [disciplinas, setDisciplinas] = useState(true);
  const [cursoParaEditar, setCursoParaEditar] = useState(null); 
  const [cursos, setCursos] = useState([]);

  useEffect(() => listarCursos(), []);

  const listarCursos = () =>
    getCursos()
    .then((retorno)=> {
      setCarregar(false);  
      setCursos(retorno);
      setCursoParaEditar(null);
    });

  const cadastrar = (nome) => 
    postCurso(nome)
    .then(() => listarCursos())
    .catch(error => console.log('CursoView::cadastrar::error', error));

  const atualizar = () => 
    putCurso(cursoParaEditar.id, cursoParaEditar)
    .then(() => listarCursos())
    .catch(error => console.error('CursoView::atualizar::', error));

  const apagar = (curso) => 
    deleteCurso(curso.id)
    .then(() => listarCursos())
    .catch(error => console.log('CursoView::apagar::', error));

  const listarDisciplinas = (curso) =>
    API.get(`/cursos/${curso.id}/disciplinas`)
    .then((retorno) => {
      setCarregarDisciplinas(false);
      setDisciplinas(retorno.data);
    });

  const editar = (curso) => {
    setCursoParaEditar(curso);
    listarDisciplinas(curso);
  }

  const cancelar = () => setCursoParaEditar(null);

  const handleChangeCurso = ({ target }) =>
    setCursoParaEditar({
      id: cursoParaEditar.id + 0,
      nome: target.value,
    });

  return(
    <div>
      {
        cursoParaEditar == null 
        ? 
          <CursoForm onCadastrar={(nome) => cadastrar(nome)}/>
        : 
          <div>
            <br />
            <input 
              style={inputStyle} 
              value={cursoParaEditar.nome} 
              onChange={handleChangeCurso.bind(this)}
            />
            <button 
              style={btnCadastrar} 
              onClick={() => atualizar()}
            >
              {"Atualizar"}
            </button>
            <button 
              style={btnCadastrar} 
              onClick={() => cancelar()}
            >
              {"Cancelar"}
            </button>
          </div>
      }
      <br />
      {
        carregar ? 
          null 
        : 
          <CursoTabela 
            cursos={cursos} 
            editar={(curso) => editar(curso)}
            apagar={(curso) => apagar(curso)}
          />
      }
      <br />
      { carregarDisciplinas ? null : <DisciplinaTabela disciplinas={disciplinas} /> }
    </div>
  );
}
