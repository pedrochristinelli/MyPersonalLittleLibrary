import React, { Component } from 'react';
import axios from 'axios';

export default class FormEditLivro extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
        this.state = {id: '', nome: '', genero: '', pages: '', autor: '', listaItens: []}
        this.refresh = this.refresh.bind(this);
    }

    refresh() {
        var idUrl = window.location.href.split('?')[1].split('=')[1];
        this.setState({id: idUrl});
        axios.post('http://localhost:8080/api/listUmLivro', {id: idUrl}, {
            headers: {
                'Content-Type': 'application/json'
            },
            params: {
                id: idUrl,
            }
        })
        .then(res => {
            this.setState({id: res.data.data[0].id});
            this.setState({nome: res.data.data[0].nome});
            this.setState({genero: res.data.data[0].genero});
            this.setState({pages: res.data.data[0].pages});
            this.setState({autor: res.data.data[0].autor});
        })

        axios.get("http://localhost:8080/api/allAutor")
        .then(response => { this.setState({ listaItens: response.data}); })
        .catch((error) => { console.log('Erro ao recuperar os dados: '+error); }); 
    }

    componentWillMount() {
        this.refresh()
    }

    handleSubmit(event) {
        event.preventDefault();
        axios.post('http://localhost:8080/api/updateLivro', {id: this.state.id,nome: this.state.nome, genero: this.state.genero, pages: this.state.pages, autor: this.state.autor}, {
            headers: {
                'Content-Type': 'application/json'
            },
            params: {
                id: this.state.id,
                nome: this.state.nome,
                genero: this.state.genero,
                pages: this.state.pages,
                autor: this.state.autor
            }
        })
        .then(res => {
            if(res.data.status === "Success"){
                window.location.href='/listarlivros'
            }
        })
    }

    handleTextChange(event) {
        switch (event.target.name) {
            case "nome":
                this.setState({nome: event.target.value});
                break;
            case "genero":
                this.setState({genero: event.target.value});
                break;  
            case "pages":
                this.setState({pages: event.target.value});
                break;
            case "autor":
                this.setState({autor: event.target.value});
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
                        <input type="text" class="form-control" name="nome" id="usernameInput" aria-describedby="nome" placeholder="Nome" value={this.state.nome} onChange={ this.handleTextChange } required />
                    </div>
                    <div class="form-group">
                        <input type="text" class="form-control" name="genero" id="generoInput" aria-describedby="genero" placeholder="Gênero" value={this.state.genero} onChange={ this.handleTextChange } required />
                    </div>
                    <div class="form-group">
                        <input type="number" class="form-control" name="pages" id="paginaInput" aria-describedby="pagina" placeholder="Páginas" value={this.state.pages} onChange={ this.handleTextChange } required />
                    </div>
                    <select class="form-control" value={this.state.autor} onChange={this.handleTextChange} name="autor" id="autor">
                        {this.state.listaItens.map(item => (
                            <option value={item.id}>{item.nome}</option>
                        ))}
                    </select>
                    <br></br>
                    <button type="submit" class="btn btn-outline-secondary">Editar</button>
                </div>
            </form>
        ) 
    }
} 
