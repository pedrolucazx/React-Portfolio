import { useState } from "react"
import {GitHub, Code} from "@material-ui/icons"
import "./works.scss"

import { data } from "../../data";
export default function Works() {
  const [currentSlide, setcurrentSlide] = useState(0);

  const handleClink = (way) => {
    way === "left" ? setcurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2) :
      setcurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0)
  }
  return (
    <div className="works" id="works">
      <h1>Projetos</h1>
      <div className="slider" style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
        {data.map((dataProjects) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <h2>{dataProjects.title}</h2>
                  <p>
                    {dataProjects.desc}
                  </p>
                  <div className="buttons">
                    <button>
                      <a href={dataProjects.git} target="_blank" rel="noreferrer"><GitHub/> GitHub</a>
                    </button>
                    <button>
                      <a href={dataProjects.site} target="_blank" rel="noreferrer"><Code/> WebSite</a>
                    </button>
                  </div>
                </div>
              </div>
              <div className="right">
                <img
                  src={dataProjects.img}
                  alt=""
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img src="assets/arrow.png" className="arrow left" alt="" onClick={() => handleClink("left")} />
      <img src="assets/arrow.png" className="arrow right" alt="" onClick={() => handleClink()} />

    </div>
  )
}
