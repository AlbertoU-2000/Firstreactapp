import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route , Router , Link } from 'react-router-dom';
import {Homepage} from './pages/Homepage';
import { Prodottipage } from './pages/Prodottipage';
import { history } from './utils/history';
import {Loginpage} from './pages/Loginpage';




function App() {

  return (
    <>
    
    <BrowserRouter>
       <Router history={history}>
       <Route exact path={"/"} component={Homepage}/>
       <Route exact path={"/prodotti"} component={Prodottipage}/>
       <Route exact path={"/login"} component={Loginpage}/> 
      </Router>
    </BrowserRouter>
    </>

  );


}

export default App;
