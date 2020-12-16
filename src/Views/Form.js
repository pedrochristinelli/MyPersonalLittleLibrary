import '../Css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function Form() {
  return (
    <center>
        <form>
            <div class="form-row">
                <div class="form-group">
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                </div>
                <div class="form-group">
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
                </div>
                <button type="submit" class="btn btn-primary">Logar</button>
            </div>    
        </form>
    </center>
  );
}

export default Form;
