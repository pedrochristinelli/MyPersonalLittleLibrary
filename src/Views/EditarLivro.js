import '../Css/App.css';
import '../Css/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavUser from '../components/NavUser';
import FormEditLivro from '../components/FormEditLivro';

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
                <h1 class="textPurple">Editar Livro</h1>
                <br />
                <div class="col-lg-4 my-auto">
                    <FormEditLivro />
                </div>    
            </center>
        </body>
    );
}

export default User;
