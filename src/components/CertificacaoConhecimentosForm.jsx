import React, { useState, useEffect } from 'react';

const cursosJSON = [
    {id: 1, nome: 'Análise e Desenvolvimento de Sistemas'},
    {id: 2, nome: 'Letras'},
    {id: 3, nome: 'Agronomia'},
];

const disciplinasJSON = [
    {id: 1, nome: 'Banco de Dados'},
    {id: 2, nome: 'Desenvolvimento de Sistemas I'},
    {id: 3, nome: 'Desenvolvimento de Sistemas II'},
];

function CertificacaoConhecimentosForm(){
    const [cursos, setCursos] = useState(cursosJSON);
    const [disciplinas, setDisciplinas] = useState(disciplinasJSON);
    const [curso, setCurso] = useState('');
    const [discCursadaAntes, setDiscCursadaAntes] = useState('');
    const [discSolicitada, setDiscSolicitada] = useState('');
    /* const [anexos, setAnexo] = useState([]); */
    
    /* 195128 */

    const fazerRequisicao = (event) => {
        event.preventDefault();
        const requisicao = {
            idAluno: 1,
            curso,
            discCursadaAntes,
            discSolicitada,
        };

        console.log(requisicao);
    }

    useEffect(() => {
        setDisciplinas(disciplinasJSON);
    }, [curso]);

    return(
        <>
            <h3 className="text-center m-3">Certificação de Conhecimentos</h3>

            <div className="form-group">
                <label htmlFor="curso" className="mb-1">Curso</label>
                <select id="curso"
                        className="form-control"
                        onChange={({target}) => setCurso(target.value)}
                >
                    <option value=''>...</option>
                    {cursos.map(curso => <option key={curso.id} value={curso.id}>{curso.nome}</option>)}
                </select>
            </div>
            
            <div className="form-group">
                <label htmlFor="disciplina-solicitada" className="mb-1">Disciplina solicitada</label>
                <select id="disciplina-solicitada"
                        className="form-control"
                        onChange={({target}) => setDiscSolicitada(target.value)}
                        disabled={!curso}
                >
                    <option value=''>...</option>
                    {disciplinas.map(disciplina => <option key={disciplina.id} value={disciplina.id}>{disciplina.nome}</option>)}
                    
                </select>
            </div>
            
            <div className="form-group">
                <label htmlFor="disciplina-anterior" className="mb-1">Disciplina cursada anteriormente</label>
                <input type="text" className="form-control" id="disciplina-anterior" onChange={({target}) => setDiscCursadaAntes(target.value)}/>
            </div>
            
            {/* <div className="form-group">
                <label htmlFor="anexos" className="mb-1">Anexos</label>
                <input type="file" className="form-control" id="anexos" multiple/>
            </div> */}

            {/* <div class="box">
                <input type="file" name="file-1[]" id="file-1" class="inputfile inputfile-1" data-multiple-caption="{count} files selected" multiple=""/>
                <label htmlFor="file-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17"><path d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z"></path></svg> 
                    <span>Selecione um arquivo…</span>
                    </label>
            </div> */}
            
            <div className="d-flex justify-content-end">
                <button type="reset" className="btn btn-link m-1">Limpar</button>
                <button className="btn btn-primary m-1" onClick={fazerRequisicao}>Enviar</button>
            </div>
        </>
    );
}

export default CertificacaoConhecimentosForm;