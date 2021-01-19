import '../Css/App.css';
import '../Css/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavUser from '../components/NavUser';

function User() {
    return (
        <body>
            <NavUser />
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nome</th>
                        <th scope="col">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>JK Rowling</td>
                        <td><button type="button" class="btn btn-outline-success">Editar</button> <button type="button" class="btn btn-outline-danger">Remover</button></td>
                    </tr>
                </tbody>
            </table>
        </body>
    );
}

export default User;