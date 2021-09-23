import "./intro.scss"
import { init } from 'ityped'
import { useEffect, useRef } from "react"

export default function Intro() {
    const textRef = useRef()

    useEffect(()=>{
        init(textRef.current, { 
            showCursor: true,
            backDelay:1500,
            backSpeed:60,
            strings: ['Fullstack Iniciante' ], 
        });
    },[])

    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/perfil.png" alt=""/>
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Olá, Eu sou</h2>
                    <h1>Pedro Lucas</h1>
                    <h3>Desenvolvedor <span ref={textRef}></span></h3>
                </div>
                <a href="#about">
                    <img src="assets/arrow-down.png" alt=""/>
                </a>
            </div>
        </div>
    )
}
