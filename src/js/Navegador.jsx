import icon from '../img/pokeball-icon.png'
export function Navegador(){
    return(
        <>
            <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark poke-navegador">
                <a className="navbar-brand logo" href="#">
                    <img src={icon} className="d-inline-block align-top" alt="Pokeball"/>
                    Pokedex
                </a>
                <button className="navbar-toggler menu" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a href="#">Features</a>
                        </li>
                        <li className="nav-item">
                            <a href="#">Pricing</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}