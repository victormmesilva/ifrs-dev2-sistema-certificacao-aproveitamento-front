import { Form } from 'react-bootstrap';
import React, { Component } from 'react';
import { is } from 'css-select';

export default class Login extends Component{

    constructor(props) {
        super(props);
    
        // criando variavel valor
        this.state = {
          user: this.props.usuario,
          senha: "",
          isLogin:false
        }

        
    }

    usuarioChange(event) {
      this.setState({usuario: event.target.value });
    }

    senhaChange(event) {
      this.setState({senha: event.target.value });
    }

    loginClick(){

      this.setState({user : "ok"})
      this.setState({senha : "ok"})
      this.setState({isLogin : true})

      this.props.loginState(this.state.isLogin)
    }


    render() {
      return(
       <div>

        <br/><br/>
        Usuário <br/>      
        <input type="text" 
            value={this.state.user} 
            onChange={this.usuarioChange.bind(this)} 
        /> 
        <br/><br/>


        Senha <br/>
        <input type="text" 
            value={this.state.senha} 
            onChange={this.senhaChange.bind(this)} 
        />   
        <br/><br/>


        <button onClick={this.loginClick.bind(this)}  >Login</button>

       </div>
      );
    }
}
