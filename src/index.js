import React from 'react';
import ReactDOM from 'react-dom';
import Inicio from './pages/Inicio';
import * as serviceWorker from './serviceWorker';
import NovaRequisicao from './pages/NovaRequisicao';
import MinhasRequisicoes from './pages/MinhasRequisicoes';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import SACENavbar from './components/SACENavbar';

ReactDOM.render(
    <BrowserRouter>
        <SACENavbar />
        <div className="container">
            <Switch>
                <Route exact path="/" component={Inicio} />
                <Route path="/nova-requisicao" component={NovaRequisicao} />           
                <Route path="/minhas-requisicoes" component={MinhasRequisicoes} />           
            </Switch>
        </div>
    </BrowserRouter>,
    document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();