import '../Css/App.css';
import '../Css/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavUser from '../components/NavUser';
import TableLivros from '../components/TableLivros';

function User() {
    return (
        <body>
            <NavUser />
            <TableLivros />
        </body>
    );
}

export default User;
