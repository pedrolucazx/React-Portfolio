import { useState } from "react"
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
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>
                    {d.desc}
                  </p>
                  <span>Projects</span>
                </div>
              </div>
              <div className="right">
                <img
                  src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930"
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
