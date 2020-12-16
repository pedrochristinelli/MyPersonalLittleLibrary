import '../Css/App.css';
import '../Css/Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from './Form';


function Header() {
  return (
    <header class="masthead">
        <div class="container h-100">
            <div class="row h-100">
                <div class="col-lg-7 my-auto">
                    <div class="header-content mx-auto">
                    <h1 class="mb-5"><b class="textPurple">My Personal Library</b></h1>
                    <Form/>
                    </div>
                </div>
            </div>
        </div>
    </header>
  );
}

export default Header;
