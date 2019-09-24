import React, { useRef } from 'react';
import Files from 'react-files';
import './AnexarArquivosInput.css';

function AnexarArquivosInput(props) {
    const { anexos, setAnexos } = props;
    const refAnexos = useRef();

    const onFilesChange = (files) => setAnexos(files);
    
    const onFilesError = (error, file) => {
        console.log('error code ' + error.code + ': ' + error.message)
    }
    
    const removerAnexo = (file) => refAnexos.current.removeFile(file);
    
    const removerTodosAnexos = (event) => {
        event.preventDefault();
        refAnexos.current.removeFiles();
    }
    //console.log(refAnexos.current.state.files);

    return (
        <>
            <div className="form-group">
                <Files
                    ref={refAnexos}
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
                    {'Clique ou solte aqui os arquivos para anexar'}
                </Files>
                {
                    anexos.length > 0 ? 
                    <div className='files-list'>
                            <ul>
                                {anexos.map((file) =>
                                    <li className='files-list-item' key={file.id}>
                                        <div className='files-list-item-preview'>{
                                            file.preview.type === 'image' ? 
                                            <img className='files-list-item-preview-image' src={file.preview.url} alt={'Preview do anexo'} />
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
                                            onClick={() => removerAnexo(file)}
                                        />
                                    </li>
                                )}
                            </ul>
                        </div>
                    : null
                }
            </div> 
            
            <div className="d-flex justify-content-start">
                <button 
                    className="btn btn-link m-1" 
                    onClick={removerTodosAnexos}
                >
                    Remover todos os anexos
                </button>
            </div>
        </>
    );
}

export default AnexarArquivosInput;
