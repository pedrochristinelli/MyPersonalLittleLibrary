import '../Css/App.css';
import '../Css/Home.css';
import logo from '../Assets/logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';


function Nav() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
        <div class="container">
        <a class="navbar-brand js-scroll-trigger" href="#page-top"><img class="logo2" src={logo} alt="logo"/></a>
        <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            Menu
            <i class="fas fa-bars"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                    <a class="nav-link js-scroll-trigger" href="#home">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link js-scroll-trigger" href="#sobre">Sobre</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link js-scroll-trigger" href="#cases">Cases</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link js-scroll-trigger" href="#price">Preço</a>
                </li>
                <li class="nav-item">
                    <button class="btn btn-outline-secondary">Logar</button>
                </li>
            </ul>
        </div>
        </div>
    </nav>
  );
}

export default Nav;
