//App component
import React, { Component } from 'react';
import Modal, { ModalHeader, ModalBody, ModalFooter } from './Modal';
import logo from '../Assets/logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Css/App.css';
import '../Css/Home.css';


class NavHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({ modal: !this.state.modal });
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
                        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Listar Livros</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Adicionar Livro</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Listar Autores</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Adicionar Autor</a>
                    </li>
                </ul>
                <form class="form-inline my-2 my-lg-0">
                <button class="btn btn-outline-danger my-2 my-sm-0" type="submit">Deslogar</button>
                </form>
            </div>
        </nav> 
    );
  }
}

export default NavHome;