import React, { Component } from 'react';
import axios from 'axios';

export default class FormEditAutor extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
        this.state = {id: '' ,nome: ''}
        this.refresh = this.refresh.bind(this);
    }

    refresh() {
        var idUrl = window.location.href.split('?')[1].split('=')[1];
        this.setState({id: idUrl});
        axios.post('http://localhost:8080/api/listUmAutor', {id: idUrl}, {
            headers: {
                'Content-Type': 'application/json'
            },
            params: {
                id: idUrl,
            }
        })
        .then(res => {
            this.setState({nome: res.data.data[0].nome});
            this.setState({id: res.data.data[0].id});
        })
    }

    componentWillMount() {
        this.refresh()
    }

    handleSubmit(event) {
        event.preventDefault();
        axios.post('http://localhost:8080/api/updateAutor', {id: this.state.id,nome: this.state.nome}, {
            headers: {
                'Content-Type': 'application/json'
            },
            params: {
                id: this.state.id,
                nome: this.state.nome
            }
        })
        .then(res => {
            if(res.data.status === "Success"){
                window.location.href='/listarautores'
            }
        })
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
                        <input type="text" class="form-control" id="nomeInput" name="nome" value={this.state.nome} onChange={ this.handleTextChange } aria-describedby="NomeAutor" placeholder="Nome Autor" required/>
                    </div>
                    <button type="submit" class="btn btn-outline-secondary">Editar</button>
                </div>
            </form>
        ) 
    }
} 
