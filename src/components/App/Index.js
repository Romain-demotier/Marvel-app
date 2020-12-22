
import '../../App.css';
import Header from "../Header/Index"
import Landing from "../Landing/Index"
import Footer from "../Footer/Index"
import Welcome from "../Welcome/Index"
import Login from "../Login/Index"
import SignUp from "../SignUp/Index"
import ErrorPage from "../ErrorPage/Index"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  return (
    

     <Router>
      <Header/>

      <Switch>
         <Route  exact path="/" component= {Landing}/>
         <Route path="/welcome" component= {Welcome}/>
         <Route path="/login" component= {Login}/>
         <Route path="/signUp" component= {SignUp}/>
         <Route  component= {ErrorPage}/>
      </Switch>
       
        

      <Footer/>
      </Router>

  
  );
}

export default App;
