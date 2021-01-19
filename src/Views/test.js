
import React, { Component } from 'react';
import axios from 'axios';

export default class Cadastro extends Component {
    constructor(props) {
        super(props);
        this.state = { listaItens: [] }
    
        this.refresh = this.refresh.bind(this);
    }
    
    refresh() {
        axios.get("http://localhost:8080/api/allLivro")
        .then(response => { this.setState({ listaItens: response.data}); })
        .catch((error) => { console.log('Erro ao recuperar os dados: '+error); });    
    }
    
    componentDidMount() {
        this.refresh()
    }
    
    render() {
        return (
            <div>
                <table>
                    <tr>
                        <th scope="col">Nome</th>
                    </tr>
                    {this.state.listaItens.map(item => (
                        <li key={item.id}>
                            <p><b>Nome:</b> {item.nome}</p>
                        </li>
                    ))}
                </table>
            </div>
        ) 
    }
} 