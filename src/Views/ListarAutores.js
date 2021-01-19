import '../Css/App.css';
import '../Css/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavUser from '../components/NavUser';
import TableAutores from '../components/TableAutores';

function User() {
    return (
        <body>
            <NavUser />
            <TableAutores />
        </body>
    );
}

export default User;
