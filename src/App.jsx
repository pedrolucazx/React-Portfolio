import "./app.scss"
import {useState} from "react";
import Topbar from "./compenents/topbar/Topbar";
import Menu from "./compenents/menu/Menu"
import Intro from "./compenents/intro/Intro";
import About from './compenents/about/About'
import Portfolio from "./compenents/portfolio/Portfolio";
import Works from "./compenents/works/Works";
import Testimonials from "./compenents/testimonials/Testimonials";
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
        <Portfolio/>
        <Works/>
        <Testimonials/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
