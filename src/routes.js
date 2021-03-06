//Importar as dependências
import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

//Importar as páginas
import main from './Views/Main';
import home from './Views/Home';
import adicionarautor from './Views/AdicionarAutor';
import adicionarlivro from './Views/AdicionarLivro';
import listarautores from './Views/ListarAutores';
import listarlivros from './Views/ListarLivros';
import editarautor from './Views/EditarAutor';
import editarlivro from './Views/EditarLivro';

//Criar o componentes com as rotas
function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={main} />
                <Route path="/home" component={home} />
                <Route path="/adicionarautor" component={adicionarautor} />
                <Route path="/adicionarlivro" component={adicionarlivro} />
                <Route path="/listarautores" component={listarautores} />
                <Route path="/listarlivros" component={listarlivros} />
                <Route path="/editarautor" component={editarautor} />
                <Route path="/editarlivro" component={editarlivro} />
            </Switch>        
        </BrowserRouter>
    );
};

export default Routes;