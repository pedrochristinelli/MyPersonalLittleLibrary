import '../Css/App.css';
import '../Css/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavHome from '../components/NavHome';
import FormRegister from '../components/FormRegister';

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
                  <FormRegister />
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
