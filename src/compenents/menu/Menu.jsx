import "./menu.scss"

export default function Menu({ menuOpen, setMenuOpen }) {
    return (
        <div className={"menu " + (menuOpen && "active")}>
            <ul>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#intro">Home</a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#about">Sobre</a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#portfolio">Portfolio</a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#works">Trabalhos</a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#testimonials">Recomendações</a>
                </li>                
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#contact">Contato</a>
                </li>
            </ul>
        </div>
    )
}
