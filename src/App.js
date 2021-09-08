import React, {useState} from "react";
import './App.css'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import About from "./About/About";
import Accueil from "./Accueil/Accueil";
import Navbar from "./Navbar/Navbar";
import SideBar from "./Navbar/Sidebar/SideBar";
import ThemeContextProvider from "./Context/ThemeContext";



const App = () => {
  const [isOpen, setIsOpen] = useState(false);


  const toggle = () => {
    setIsOpen(!isOpen);
  };


 
  return (
    <div className="App">
      <ThemeContextProvider>
    <Router>
    <div className="home-navbar">
    <Navbar toggle={toggle}/>
    {isOpen &&
      <SideBar isOpen={isOpen} toggle={toggle}/>}
      </div>
      <Switch>
        <Route path="/" exact component={Accueil} />
        <Route path="/about" exact component={About} />
        
     
      </Switch>
    </Router>
    </ThemeContextProvider>

    </div>
  )}

export default App;
