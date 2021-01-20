import '../Css/App.css';
import '../Css/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavUser from '../components/NavUser';
import TableLivros from '../components/TableLivros';

function User() {
    //Impede pessoas não logadas entrarem
    if (sessionStorage.getItem('user') == null) {
        window.location.href="/";
    }
    return (
        <body>
            <NavUser />
            <TableLivros />
        </body>
    );
}

export default User;
