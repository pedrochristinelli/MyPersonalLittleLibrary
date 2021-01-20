import React, { Component } from 'react';
import axios from 'axios';

export default class FormLivro extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
        this.refresh = this.refresh.bind(this);
        this.state = {username: '', email: '', password: '', message: ''}
    }

    refresh() {
        axios.get("http://localhost:8080/api/allAutor")
        .then(response => { this.setState({ listaItens: response.data}); })
        .catch((error) => { console.log('Erro ao recuperar os dados: '+error); }); 
    }
    
    componentDidMount() {
        this.refresh()
    }

    handleSubmit(event) {
        event.preventDefault();
        
        axios.post('http://localhost:8080/api/addUmUsuario', {username: this.state.username, email: this.state.email, password: this.state.password}, {
            headers: {
                'Content-Type': 'application/json'
            },
            params: {
                username: this.state.username,
                email: this.state.email,
                password: this.state.password
            }
        })
        .then(res => {
            if(res.data.status === "Success"){
                sessionStorage.setItem('user', JSON.stringify({'user': this.state.username, 'status': 'logado'}));
                window.location.href='/home';
            }
        })
        .catch((err) => {
            this.setState({ message: "Usuário já registrado" });
        });
        }
    

    handleTextChange(event) {
        switch (event.target.name) {
            case "usuario":
                this.setState({username: event.target.value});
                break;
            case "email":
                this.setState({email: event.target.value});
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
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <div class="form-group">
                        <input type="text" class="form-control" id="usernameInput" name="usuario" aria-describedby="usuario" onChange={ this.handleTextChange } placeholder="Usuário" required/>
                        </div>
                        <div class="form-group">
                        <input type="email" class="form-control" id="emailInput" name="email" aria-describedby="email" onChange={ this.handleTextChange } placeholder="Email" required/>
                        </div>
                        <div class="form-group">
                        <input type="password" class="form-control" id="passwordInput" name="senha" onChange={ this.handleTextChange } placeholder="Senha" required/>
                        </div>
                        <button type="submit" class="btn btn-primary">Registrar-se</button>
                    </div>
                </form>
                <center><b class="messageError">{this.state.message}</b></center>
            </div>
        ) 
    }
}