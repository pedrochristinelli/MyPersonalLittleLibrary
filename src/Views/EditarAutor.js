import '../Css/App.css';
import '../Css/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavUser from '../components/NavUser';
import FormEditAutor from '../components/FormEditAutor';

function User() {
    //Impede pessoas não logadas entrarem
    if (sessionStorage.getItem('user') == null) {
        window.location.href="/";
    }
    return (
        <body>
            <NavUser />
            <center>
                <br />
                <h1 class="textPurple">Editar Autor</h1>
                <br />
                <div class="col-lg-4 my-auto">
                    <FormEditAutor />
                </div>    
            </center>     
        </body>
    );
}

export default User;
