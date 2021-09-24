import { LinkedIn, Mail, GitHub } from "@material-ui/icons";
import "./contact.scss"

export default function Contact() {
  return (
    <div className="contact" id="contact">
      
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>

      <div className="right">
        <h2>Contato</h2>
        <div className="sociais">
          <div className="itemContainer">
            <LinkedIn className="icon" />
            <a href="https://www.linkedin.com/in/pedrolucazx/" className="links" target="blank">LinkedIn</a>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <a href="mailto:pedrolucas0921@gmail.com" className="links" target="blank">Mail</a>
          </div>
          <div className="itemContainer">
            <GitHub className="icon" />
            <a href="https://github.com/pedrolucazx" className="links" target="blank">GitHub</a>
          </div>
        </div>
      </div>
    </div>
  )
}
