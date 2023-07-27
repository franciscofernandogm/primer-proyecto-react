import icon from '../../assets/img/pokeball-icon.png'
import { Link } from 'react-router-dom';
import './Header.css'
export function Header(){
    return(
        <>
            <header>
                <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark poke-navegador">
                    <Link className="navbar-brand logo" to="/">
                        <img src={icon} className="d-inline-block align-top pokeball" alt="Pokeball"/>
                        Pokedex
                    </Link>
                    <button className="navbar-toggler menu" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link href="/" className='links' to="/">All Pokemons</Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/my-team" className='links' to="/my-team">My Team</Link>
                            </li>
                            <li className="nav-item">
                                <Link href="#" className='links'>My Ranch</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        </>
    )
}