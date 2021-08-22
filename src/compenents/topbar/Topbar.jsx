import "./topbar.scss"
import {LinkedIn, Mail, GitHub} from "@material-ui/icons";

export default function Topbar({ menuOpen, setMenuOpen}) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">Pedro Lucas</a>
                    <div className="itemContainer">
                        <LinkedIn className="icon"/>
                        <a href="https://www.linkedin.com/in/pedrolucazx/" className="links" target="blank">LinkedIn</a>
                    </div>
                    <div className="itemContainer">
                        <Mail className="icon"/>
                        <a href="mailto:pedrolucas0921@gmail.com" className="links" target="blank">Mail</a>
                    </div>
                    <div className="itemContainer">
                        <GitHub className="icon"/>
                        <a href="https://github.com/pedrolucazx" className="links" target="blank">GitHub</a>
                    </div>
                </div>            
                <div className="right">
                    <div className="opcoes" onClick={ () => setMenuOpen(!menuOpen)} >
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
