//App component
import React, { Component } from 'react';
import logo from '../Assets/logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Css/App.css';
import '../Css/Home.css';

class NavHome extends Component {
  deslogar(){
    sessionStorage.clear();
    window.location.href="/";
  }
  render() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <img class="logo3" src={logo} alt="logo" />
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <a class="nav-link" href="/home">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/listarlivros">Listar Livros</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/listarautores">Listar Autores</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/adicionarlivro">Adicionar Livro</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/adicionarautor">Adicionar Autor</a>
                    </li>
                </ul>
                <button class="btn btn-outline-danger my-2 my-sm-0" onClick={ this.deslogar }>Deslogar</button>
            </div>
        </nav> 
    );
  }
}

export default NavHome;