import '../Css/App.css';
import '../Css/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavUser from '../components/NavUser';
import logo from '../Assets/logo.png';


function User() {
    return (
        <body>
            <NavUser />
            <center>
            <br />
            <h1><b class="tittleMPLL">My Personal Little Library</b></h1>
            <br />
            <img src={logo} alt="logo" />
            <h2><b class="tittleMPLL">O seu organizador pessoal de livros</b></h2>
            </center>
        </body>
    );
}

export default User;
