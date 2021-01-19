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
        <div>
        <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
            <div class="container">
                <a class="navbar-brand js-scroll-trigger" href="#page-top"><img class="logo2" src={logo} alt="logo" /></a>
                <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
            <i class="fas fa-bars"></i>
                </button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                            <a class="nav-link js-scroll-trigger" href="#home">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link js-scroll-trigger" href="#sobre">Sobre</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link js-scroll-trigger" href="#cases">Cases</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link js-scroll-trigger" href="#price">Preço</a>
                        </li>
                        <li class="nav-item">
                            <button class="btn btn-outline-secondary" data-toggle="modal" alt="logar" onClick={this.toggle}>Logar</button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
      <div className="App">
        <Modal isOpen={this.state.modal}>
          <ModalHeader>
            <h3>Entrar</h3>
            <button
              type="button"
              className="close"
              aria-label="Close"
              onClick={this.toggle}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </ModalHeader>
          <ModalBody>
            <form method="POST" action="">
              <div>
                <div class="form-group">
                  <input type="text" class="form-control" id="usernameInput" aria-describedby="emailHelp" placeholder="Usuário" />
                </div>
                <div class="form-group">
                  <input type="password" class="form-control" id="passwordInput" placeholder="Senha" />
                </div>
                <button type="submit" class="btn btn-outline-secondary">Logar</button>
              </div>
            </form>
          </ModalBody>
          <ModalFooter>
          </ModalFooter>
        </Modal>
      </div>
      </div>
    );
  }
}

export default NavHome;