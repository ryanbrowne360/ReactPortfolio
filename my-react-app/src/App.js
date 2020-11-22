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

          <Route exact path="/" component={Home} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/portfolio" component={Portfolio} />
           
        </Switch>
      </div>
    </BrowserRouter>
  );
}
export default App;