import React, { Component } from 'react';
import Axios from "axios";
import {baseURL} from "../enviroment";
class ListaCursos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cursos:[]
            // cursos:[{id:1,nome:"Teste",disciplinas:[{nome:"teste",cargaHoraria:20},{nome:"teste",cargaHoraria:20}]},{id:1,nome:"Teste",disciplinas:[{nome:"teste",cargaHoraria:20},{nome:"teste",cargaHoraria:20}]}]
          }
    }
    async componentDidMount(){
    //    await Axios.get(baseURL+"/cursos/").then((retorno)=>this.setState({cursos:retorno.data}));
    }

    render() { 
        return (
            <div>
                <table className="table table-striped">
                    <thead className="thead-dark">
                        <tr>
                            <th>id</th>
                            <th>Curso</th>
                            <th>Disciplinas</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                        this.state.cursos.map((curso)=> 
                             <tr key={curso.id}>
                                <td>{curso.id}</td>
                                <td>{curso.nome}</td>
                                <td><ul>
                                    {
                                     curso.disciplinas && curso.disciplinas.map((d)=>
                                            <li>{d.nome}</li>
                                     )    
                                    }
                                    </ul>
                                </td>
                             </tr>
                        )
                        }
                    </tbody>
                </table>
            </div>
          );
    }
}
 
export default ListaCursos;