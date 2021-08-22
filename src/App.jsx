import Topbar from "./compenents/topbar/Topbar";
import Intro from "./compenents/intro/Intro";
import Portfolio from "./compenents/portfolio/Portfolio";
import Works from "./compenents/works/Works";
import Testimonials from "./compenents/testimonials/Testimonials";
import Contact from "./compenents/contact/Contact";
import "./app.css"
import {useState} from "react";
import Menu from "./compenents/menu/Menu"

function App() {
  const[ menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Intro/>
        <Portfolio/>
        <Works/>
        <Testimonials/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
