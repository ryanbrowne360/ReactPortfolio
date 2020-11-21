import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Portfolio from "./views/Portfolio";
import Contact from "./views/Contact";
import Home from "./views/Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";
//import {Route, Switch} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/contact">
            <Contact/>
          
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
