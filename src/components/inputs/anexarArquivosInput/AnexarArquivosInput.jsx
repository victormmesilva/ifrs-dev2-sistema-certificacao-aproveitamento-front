import React, { useRef, useEffect } from 'react';
import Files from 'react-files';
import './AnexarArquivosInput.css';
import { Form, Button } from 'react-bootstrap';

export default function AnexarArquivosInput({ anexos, setAnexos, filesRecive, setFilesRecive, onError }) {
    const refAnexos = useRef();
    
    useEffect(() => refAnexos.current.setState({ files: anexos}), [anexos]);

    const onFilesChange = (files) => {
       // Process each file
        let allFiles = [];
        for (var i = 0; i < files.length; i++) {
    
          let file = files[i];
    
          // Make new FileReader
          let reader = new FileReader();
    
          // Convert the file to base64 text
          reader.readAsDataURL(file);
    
          // on reader load somthing...
          reader.onload = () => {
    
            // Make a fileInfo Object
            let fileInfo = {
              name: file.name,
              type: file.type,
              size: Math.round(file.size / 1000) + ' kB',
              base64: reader.result,
              file: file,
            };
    
            // Push it to the state
            allFiles.push(fileInfo);
            debugger
            // If all files have been proceed
            //if(allFiles.length == files.length){
              // Apply Callback function
              //if(this.props.multiple) this.props.onDone(allFiles);
              // else this.props.onDone(allFiles[0]);
            //}
    
          } // reader.onload
    
        } // for
        
        setAnexos(allFiles);
        setFilesRecive(files); 
        debugger;
    }
    
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
            <Form.Group>
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
                    Clique ou solte aqui os arquivos para anexar
                </Files>
                {
                    (filesRecive && filesRecive.length > 0) ? 
                    <div className='files-list'>
                            <ul>
                                { filesRecive.map((file) =>
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
            </Form.Group> 
            {onError && 
                <Form.Text className="text-danger">
                    O campo anexos é obrigatório
                </Form.Text>
            }
            <Form.Group className="d-flex justify-content-start m-0 p-0">                
                <Button
                    variant="link" 
                    className="m-0 p-0 border-0" 
                    onClick={removerTodosAnexos}
                    disabled={!anexos.length}
                >
                    Remover todos os anexos
                </Button>
            </Form.Group>
        </>
    );
}