import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import About from "./About/About";
import Accueil from "./Accueil/Accueil";



function App() {
 
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Accueil} />
        <Route path="/about" exact component={About} />
     
      </Switch>
    </Router>
  )}

export default App;
