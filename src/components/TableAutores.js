
import React, { Component } from 'react';
import axios from 'axios';

export default class TableAutores extends Component {
    constructor(props) {
        super(props);
        this.state = { listaItens: [] }
        this.refresh = this.refresh.bind(this);
    }
    
    refresh() {
        axios.get("http://localhost:8080/api/allAutor")
        .then(response => { this.setState({ listaItens: response.data}); })
        .catch((error) => { console.log('Erro ao recuperar os dados: '+error); }); 
    }
    
    componentDidMount() {
        this.refresh()
    }

    editAutor(id){}

    removeAutor(id){
        axios({
            method: 'post',
            url: 'http://localhost:8080/api/removeAutor',
            data: {
                id: id
            }
        });
    }

    
    render() {
        return (
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nome</th>
                        <th scope="col">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.listaItens.map(item => (
                        <tr>
                            <th scope="row">{item.id}</th>
                            <td>{item.nome}</td>
                            <td><button onClick={() => this.editAutor(item.id)} class="btn btn-outline-success">Editar</button> <button onClick={() => this.removeAutor(item.id)} class="btn btn-outline-danger">Remover</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        ) 
    }
} 
