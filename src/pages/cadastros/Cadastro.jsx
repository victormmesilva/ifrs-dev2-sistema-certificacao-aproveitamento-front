import {React, useState} from 'react';
import axios from 'axios'; 
import { functionDeclaration } from '@babel/types';

export default function Cadastro(){
//tipo matricula dataIngresso senha nome login novaSenha email permissoes permissoes
    const [matricula, setMatricula] = useState(''); 
    const [tipo] = useState(""); 
    const [dataIngresso, setDataIngresso] = useState(""); 
    const [senha, setSenha] = useState(""); 
    const [nome, setNome] = useState(""); 
    const [login, setLogin] = useState(""); 
    const [novaSenha, setNovaSenha] = useState(""); 
    const [email, setEmail] = useState(""); 
    const [permissoes, setPermissoes] = useState(""); 

    

    return <div>
        Hello World
    </div>

}