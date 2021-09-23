import "./app.scss"
import {useState} from "react";
import Topbar from "./compenents/topbar/Topbar";
import Menu from "./compenents/menu/Menu"
import Intro from "./compenents/intro/Intro";
import About from './compenents/about/About'
import Works from "./compenents/works/Works";
import Contact from "./compenents/contact/Contact";

function App() {
  const[ menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Intro/>
        <About/>
        <Works/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
