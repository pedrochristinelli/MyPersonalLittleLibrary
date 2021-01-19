import '../Css/App.css';
import '../Css/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavHome from '../components/NavHome';

function Home() {
  return (
    <div>
      <NavHome />
      <header class="masthead">
        <div class="container h-100">
          <div class="row h-100">
            <div class="col-lg-7 my-auto">
              <div class="header-content mx-auto">
                <center>
                  <h1 class="mb-5"><b class="textPurple">My Personal Library</b></h1>
                  <form method="POST" action="">
                    <div>
                      <div class="form-group">
                        <input type="text" class="form-control" id="usernameInput" aria-describedby="usuario" placeholder="Usuário" />
                      </div>
                      <div class="form-group">
                        <input type="email" class="form-control" id="emailInput" aria-describedby="email" placeholder="Email" />
                      </div>
                      <div class="form-group">
                        <input type="password" class="form-control" id="passwordInput" placeholder="Senha" />
                      </div>
                      <button type="submit" class="btn btn-primary">Registrar-se</button>
                    </div>
                  </form>
                </center>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Home;
