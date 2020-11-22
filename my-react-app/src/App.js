import "./App.css";
import Navbar from "./components/Navbar";
import Portfolio from "./views/Portfolio";
import Contact from "./views/Contact";
import Home from "./views/Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>

      <div className="App">
        <Navbar />
        
        <Switch>
          <Route path="/">
            <Home />
          </Route>
          <Route path="Contact">
            <Contact />
            <route path="Portfolio">
              <Portfolio />
            </route>

          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
