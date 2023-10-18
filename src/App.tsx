import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import "./Style.css";

import Navbar from "./assets/components/Navbar.tsx";
import Home from "./assets/components/Home.tsx";
import Footer from "./assets/components/Footer.tsx";
import About from "./assets/components/About.tsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
            <Home bgAmount={3}/>
        </Route>
        <Route path="/about">
            <About />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
