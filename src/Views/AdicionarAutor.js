import '../Css/App.css';
import '../Css/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavUser from '../components/NavUser';
import FormAutor from '../components/FormAutor';

function User() {
    return (
        <body>
            <NavUser />
            <center>
                <br />
                <h1 class="textPurple">Adicionar Autor</h1>
                <br />
                <div class="col-lg-4 my-auto">
                    <FormAutor />
                </div>    
            </center>     
        </body>
    );
}

export default User;
