//App component
import React, { Component } from 'react';
import Modal, { ModalHeader, ModalBody, ModalFooter } from './Modal';
import axios from 'axios';
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
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.state = {username: '', password: '', message: ''};
  }

  toggle() {
    this.setState({ modal: !this.state.modal });
  }

  handleSubmit(event) {   
    event.preventDefault();
    axios.post('http://localhost:8080/api/login', {username: this.state.username, password: this.state.password}, {
        headers: {
            'Content-Type': 'application/json'
        },
        params: {
          username: this.state.username,
          password: this.state.password
        }
    })
    .then(res => {
        if(res.data.status === "Success"){
            sessionStorage.setItem('user', JSON.stringify({'user': this.state.username, 'userid': res.data.data[0].id, 'status': 'logado'}));
            window.location.href='/home';
        }
    })
    .catch((err) => {
        this.setState({ message: "Usuário ou senha inválidos" });
    });
  }

  handleTextChange(event) {
    switch (event.target.name) {
        case "usuario":
            this.setState({username: event.target.value});
            break; 
        case "senha":
            this.setState({password: event.target.value});
            break;
        default:
            break;
    }
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
            <form onSubmit={this.handleSubmit}>
              <div>
                <div class="form-group">
                  <input type="text" class="form-control" id="usernameInput" name="usuario" aria-describedby="emailHelp" onChange={ this.handleTextChange } placeholder="Usuário" />
                </div>
                <div class="form-group">
                  <input type="password" class="form-control" id="passwordInput" name="senha" onChange={ this.handleTextChange } placeholder="Senha" />
                </div>
                <button type="submit" class="btn btn-outline-secondary">Logar</button>
              </div>
            </form> 
          </ModalBody>
          <ModalFooter>
            <b class="messageError">{this.state.message}</b>
          </ModalFooter>
        </Modal>
      </div>
      </div>
    );
  }
}

export default NavHome;