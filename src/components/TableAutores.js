
import React, { Component } from 'react';
import axios from 'axios';

export default class TableAutores extends Component {
    constructor(props) {
        super(props);
        this.state = { listaItens: [] }
        this.refresh = this.refresh.bind(this);
    }
    
    refresh() {
        var userid = JSON.parse(sessionStorage.getItem('user')).userid;
        axios.post('http://localhost:8080/api/allAutor', {userid: userid}, {
            headers: {
                'Content-Type': 'application/json'
            },
            params: {
                userid: userid,
            }
        })
        .then(res => {
            this.setState({listaItens: res.data.data});
        })
    }
    
    componentDidMount() {
        this.refresh()
    }

    editAutor(id){
        window.location.href = '/editarautor?id='+id
    }

    removeAutor(id){
        axios({
            method: 'post',
            url: 'http://localhost:8080/api/removeAutor',
            headers: {
                'Content-Type': 'application/json'
            },
            params: {
                id: id
            }
        });
        this.refresh();
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
