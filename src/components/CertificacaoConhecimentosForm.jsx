import React, { useState, useEffect, useRef } from 'react';
import Select from 'react-select';
import Files from 'react-files';
import Blob from 'blob'
/* import FormData from 'form-data' */
import './inputFiles.css';

const defaultSelect = {label: '...', value: ''};
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
    const [anexos, setAnexos] = useState([]);
    
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
        /* console.log(discSolicitada); */
        if(curso === ''){
            setDiscSolicitada('');
        } else {
            setDisciplinas(disciplinasJSON);
        }    
    }, [curso]);

    useEffect(() => {console.log(anexos)}, [anexos]);

    const onFilesChange = (files) => {
        /* setAnexos([...anexos, files].flat()); */
        setAnexos(files);
    }
    
    const onFilesError = (error, file) => {
        console.log('error code ' + error.code + ': ' + error.message)
    }
    
    const filesRemoveOne = (file) => {
        /* refs.files.removeFile(file) */
    }
    
    const removerTodosAnexos = (event) => {
        event.preventDefault();
        /* setAnexos([]); */
        console.log(anexos)
        anexos.files.removeFiles();
    }
    
    const filesUpload = () => {
        /*const formData = new FormData()
        Object.keys(state.files).forEach((key) => {
            const file = state.files[key]
            formData.append(key, new Blob([file], { type: file.type }), file.name || 'file')
        })

          axios.post(`/files`, formData)
        .then(response => window.alert(`${state.files.length} files uploaded succesfully!`))
        .catch(err => window.alert('Error uploading files :(')) */
    }

    return(
        <>
            <h3 className="text-center m-3">Certificação de Conhecimentos</h3>

            <div className="form-group">
                <label htmlFor="curso" className="mb-1">Curso</label>
                <Select
                    id="curso"
                    onChange={(option) => setCurso(option)}
                    selectedOption={null}
                    options={cursos.map(curso => ({ value: curso.id, label: curso.nome}))}
                    defaultValue={defaultSelect}
                />
            </div>
            
            <div className="form-group">
                <label htmlFor="disciplina-solicitada" className="mb-1">Disciplina solicitada</label>
                <Select
                    id="disciplina-solicitada"
                    onChange={(option) => setCurso(option)}
                    selectedOption={null}
                    options={disciplinas.map(disciplina => ({ value: disciplina.id, label: disciplina.nome}))}
                    defaultValue={defaultSelect}
                    isDisabled={!curso}
                />
            </div>
            
            <div className="form-group">
                <label htmlFor="disciplina-anterior" className="mb-1">Disciplina cursada anteriormente</label>
                <input type="text" className="form-control" id="disciplina-anterior" onChange={({target}) => setDiscCursadaAntes(target.value)}/>
            </div>
            
            <div className="form-group">
                <Files
                    ref={anexos}
                    className='files-dropzone-list'
                    style={{ height: '100px' }}
                    onChange={onFilesChange}
                    onError={onFilesError}
                    multiple
                    maxFiles={10}
                    maxFileSize={10000000}
                    minFileSize={0}
                    clickable
                >
                    {'Solte aqui os arquivos para anexar'}
                </Files>
                {
                    anexos.length > 0 ? 
                    <div className='files-list'>
                            <ul>
                                {anexos.map((file) =>
                                    <li className='files-list-item' key={file.id}>
                                        <div className='files-list-item-preview'>{
                                            file.preview.type === 'image' ? 
                                            <img className='files-list-item-preview-image' src={file.preview.url} />
                                            : 
                                            <div className='files-list-item-preview-extension'>{file.extension}</div>
                                        }</div>
                                        
                                        <div className='files-list-item-content'>
                                            <div className='files-list-item-content-item files-list-item-content-item-1'>{file.name}</div>
                                            <div className='files-list-item-content-item files-list-item-content-item-2'>{file.sizeReadable}</div>
                                        </div>
                                        
                                        <div
                                            id={file.id}
                                            className='files-list-item-remove'
                                            /* onClick={filesRemoveOne.bind(this, file)} // eslint-disable-line */
                                        />
                                    </li>
                                )}
                            </ul>
                        </div>
                    : null
                }
            </div> 
            <div className="d-flex justify-content-start">
                <button className="btn btn-link m-1" onClick={removerTodosAnexos}>Remover todos os anexos</button>
                {/*<button onClick={filesUpload}>Upload</button> */}
            </div>
            
            <div className="d-flex justify-content-end">
                <button type="reset" className="btn btn-link m-1">Limpar</button>
                <button className="btn btn-primary m-1" onClick={fazerRequisicao}>Enviar</button>
            </div>
        </>
    );
}

export default CertificacaoConhecimentosForm;