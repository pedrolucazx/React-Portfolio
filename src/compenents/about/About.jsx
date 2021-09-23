import './about.scss'
export default function About() {
  return (
    <div className="about" id="about">
      <div className="skills">
        <h2>Habilidades & conhecimentos</h2>
        <img src="https://img.icons8.com/color/144/000000/javascript--v1.png" alt="Logo JavaScript"/>
        <img src="https://img.icons8.com/color/144/000000/html-5--v1.png" alt="Logo HTML5" />
        <img src="https://img.icons8.com/color/144/000000/css3.png" alt="Logo CSS3"/>
        <img src="https://img.icons8.com/office/144/000000/react.png" alt="Logo ReactJS"/>
      </div>
      <div className="main-about">
        <h2>Sobre mim:</h2>
        <p>
          Eu sou Pedro Lucas, estou cursando Analise e Desenvolvimento de Sistema, na Universidade de Fortaleza (UNIFOR). 
          Eu gosto muito de buscar conhecimento, descobrir que exitem diversos conteúdos que ainda não sei, mais 
          empolgado em aprender-los eu fico, principalmente na área de tecnologia. Estudo com frequência JavaScript e seu ecossistema, 
          porém sou completamente flexível em aprender uma nova linguagem ou tecnologia.
        </p>
      </div>
    </div>
  )
}
