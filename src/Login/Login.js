import { Form } from 'react-bootstrap';
import React, { Component } from 'react';
import Dashboard from '../MenuInicial/Dashboard';
import axios from 'axios';

export default class Login extends Component{

    constructor(props) {
        super(props);
    
        this.state = {
          email: "",
          senha: "",
          carregar:true,
          isLogin: false,
        }
    }

    Logar(Usuario) {
      axios.post("/usuarios", Usuario).then((retorno)=>
      this.setState({carregar:false,usuario:retorno.data}));
    }

    usuarioChange(event) {
      this.setState({usuario: event.target.value });
    }

    senhaChange(event) {
      this.setState({senha: event.target.value });
    }

    loginClick(){

      this.setState({isLogin : true})
      //this.Logar(userLogin);

    }

    render() {

      const div = {
        margin: "50px 0px 0px 0px",
      };


      const mydiv = {
        margin: 'center',
        backgroundColor: "lightgray"
      };

      const mystyle1 = {
        margin: "0px 0px 0px 40%",
      };

      const btnLogin = {
        margin: "20px 10px 20px 40%",
        width: "180px"
      };



      return(
       <div style={div}>
        {this.state.isLogin==true?
        <Dashboard/>
        : 
        <div style={mydiv}>

        <br/><br/>
        <label style={mystyle1}>Usuário </label> <br/>   
        <input style={mystyle1} type="text" 
            value={this.state.user} 
            onChange={this.usuarioChange.bind(this)} 
        /> 
        <br/><br/>


        <label style={mystyle1}>Senha </label> <br/>   
        <input style={mystyle1} type="text" 
            value={this.state.senha} 
            onChange={this.senhaChange.bind(this)} 
        />   
        <br/><br/>


        <button style={btnLogin} onClick={this.loginClick.bind(this)}  >Login</button>

       </div>
        
        }    

       </div>
      );
    }
}


