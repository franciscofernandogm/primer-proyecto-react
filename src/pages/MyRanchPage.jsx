import {useSlider} from "../hooks/useSlider.js"
import { Results } from "../components/Pokemons/KantoPokemons.jsx"
import { Slider } from "../components/Slider/Slider.jsx"
import { useSelector } from "react-redux"

const MyRanch=()=>{

    const pokemons=useSelector(state=>state.pokedex.pokemons)
    const isCatching=useSelector(state=>state.pokedex.isCatching)
    const loading=useSelector(state=>state.pokedex.isLoading)


    const pokemonsCatching=[]
    pokemons.map(pokemon=>{
        if(isCatching[pokemon.id]){
            pokemonsCatching.push(pokemon)
        };
    })

    const pokemonsPorPagina = 9;

    const {paginaActual, totalPaginas, changePage, handleChange}=useSlider(pokemonsPorPagina,pokemonsCatching)

    if (loading) {
        return (
            <div id='pikachu-charging'>
                <p>Cargando...</p>
                <div>
                    <img className="pikachu" alt="Pikachu Cargando" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"/>
                </div>
            </div>
        )
    }

    return(
        <>
            <h1>My Ranch</h1>
            <div className="search">
                <input type="text" placeholder="Search..." onChange={handleChange} />
            </div>
            <Slider totalPaginas={totalPaginas} changePage={changePage} paginaActual={paginaActual}/>
            <Results allPokemons={paginaActual.pokemonsPaginados}/>
            <Slider totalPaginas={totalPaginas} changePage={changePage} paginaActual={paginaActual}/>
        </>
    )
}

export default MyRanch