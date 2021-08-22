import { useState } from "react";
import {LinkedIn, Mail, GitHub} from "@material-ui/icons";
import "./contact.scss"

export default function Contact() {
    const [message, setMessage] = useState(false)
    const handleSubmit = (e) =>{
        e.preventDefault();
        setMessage(true)
    }

    return (
        <div className="contact" id="contact">
            <div className="left">
                <img src="assets/shake.svg" alt="" />
            </div>
            <div className="right">

            <div className="sociais">
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

                <h2>Contato</h2>
                <form onSubmit={handleSubmit} >
                    <input type="text"  placeholder="Email"/>
                    <textarea placeholder = "Message"></textarea>
                    <button type="submit">Enviar</button>
                    {message && <span>Obrigado!</span>}
                </form>
            </div>
        </div>
    )
}
