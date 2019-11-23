import React from 'react';
import { Form } from 'react-bootstrap';

export default class EventoForm extends React.Component {

    constructor(props) {
        super(props);
        
            this.state = {
                nome: "",
        }
    }

    limpar() {

            this.setState({
                nome: ""
            });
    }

    confirmar() {

            this.props.onCadastrar({
                nome: this.state.nome,
            });
        
        this.limpar();
    }

    render() {
        
        const inputStyle = {
            margin: "0px 0px 10px 30%",
            width: "400px",
            padding: "10px",
            fontFamily: "Arial"
          };

          const label = {
            margin: "0px 0px 0px 30%",
            width: "400px",
            padding: "0px",
            fontFamily: "Arial"
          };
    
          const btnCadastrar = {
    
            padding: "10px",
            fontFamily: "Arial"
          };

          const btnLimpar = {
            
            padding: "10px",
            fontFamily: "Arial"
          };


        return <fieldset>

           <label  style={label}>Nome do Curso</label>
           <input style={inputStyle} value={this.state.nome}
           onChange={(event) => this.setState({nome:event.target.value}) }
           />
            
            <button style={btnCadastrar}
                disabled={this.state.nome.length < 3}
                onClick={() => this.confirmar()}
            >{"Cadastrar"}</button>

            <button style={btnLimpar}
                onClick={() => this.limpar()}
            >{this.props.editar ? "Cancelar" : "Limpar"}</button>
        </fieldset>
    }
}