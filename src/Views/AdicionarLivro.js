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
                <h1 class="textPurple">Adicionar Livro</h1>
                <br />
                <div class="col-lg-4 my-auto">
                    <form method="POST" action="">
                        <div>
                        <div class="form-group">
                            <input type="text" class="form-control" id="usernameInput" aria-describedby="nome" placeholder="Nome" />
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control" id="generoInput" aria-describedby="genero" placeholder="Gênero" />
                        </div>
                        <div class="form-group">
                            <input type="number" class="form-control" id="paginaInput" aria-describedby="pagina" placeholder="Páginas" />
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control" id="autorInput" aria-describedby="autor" placeholder="Autor" />
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
