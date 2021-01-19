import React, { Component } from 'react';
import axios from 'axios';

export default class FormLivro extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
        this.refresh = this.refresh.bind(this);
        this.state = {nome: '', genero: '', pages: '', autor: '', listaItens: []}
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
        axios({
            method: 'post',
            url: 'http://localhost:8080/api/addUmLivro',
            data: {
                nome: this.state.nome,
                genero: this.state.genero,
                pages: this.state.pages,
                autor: this.state.autor
            }
        });
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
                        <input type="text" class="form-control" name="nome" id="usernameInput" aria-describedby="nome" placeholder="Nome" onChange={ this.handleTextChange } required />
                    </div>
                    <div class="form-group">
                        <input type="text" class="form-control" name="genero" id="generoInput" aria-describedby="genero" placeholder="Gênero" onChange={ this.handleTextChange } required />
                    </div>
                    <div class="form-group">
                        <input type="number" class="form-control" name="pages" id="paginaInput" aria-describedby="pagina" placeholder="Páginas" onChange={ this.handleTextChange } required />
                    </div>
                    <select class="form-control" onChange={this.handleTextChange} name="autor" id="autor">
                        {this.state.listaItens.map(item => (
                            <option value={item.id}>{item.nome}</option>
                        ))}
                    </select>
                    <br></br>
                    <button type="submit" class="btn btn-outline-secondary">Adicionar</button>
                </div>
            </form>
        ) 
    }
} 
