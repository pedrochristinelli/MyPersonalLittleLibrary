import '../Css/App.css';
import '../Css/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavUser from '../components/NavUser';

function User() {
    return (
        <body>
            <NavUser />
            <center>
                <br />
                <h1 class="textPurple">Adicionar Autor</h1>
                <br />
                <div class="col-lg-4 my-auto">
                    <form method="POST" action="">
                        <div>
                            <div class="form-group">
                                <input type="text" class="form-control" id="nomeInput" aria-describedby="NomeAutor" placeholder="Nome Autor" />
                            </div>
                            <button type="submit" class="btn btn-outline-secondary">Adicionar</button>
                        </div>
                    </form>
                </div>    
            </center>     
        </body>
    );
}

export default User;
