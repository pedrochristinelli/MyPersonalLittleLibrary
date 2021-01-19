import React, { Component } from 'react';
import axios from 'axios';

export default class FormLivro extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
        this.state = {nome: ''}
    }

    handleSubmit(event) {
        event.preventDefault();
        axios({
            method: 'post',
            url: 'http://localhost:8080/api/addUmAutor',
            data: {
                nome: this.state.nome
            }
        });
    }

    handleTextChange(event) {
        switch (event.target.name) {
            case "nome":
                this.setState({nome: event.target.value});
                break;
            default:
                break;
        }
    }
    
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <div class="form-group">
                        <input type="text" class="form-control" id="nomeInput" name="nome" onChange={ this.handleTextChange } aria-describedby="NomeAutor" placeholder="Nome Autor" required/>
                    </div>
                    <button type="submit" class="btn btn-outline-secondary">Adicionar</button>
                </div>
            </form>
        ) 
    }
} 
