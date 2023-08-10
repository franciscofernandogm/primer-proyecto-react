import { TeamPokemon } from "../components/TeamPokemon/TeamPokemon"
import { useSelector } from "react-redux"
const MyTeam=()=>{

    const pokemons=useSelector(state=>state.pokedex.pokemons)
    const isCatching=useSelector(state=>state.pokedex.isCatching)
    const loading=useSelector(state=>state.pokedex.isLoading)

    const pokemonsCatching=[]
    pokemons.map(pokemon=>{
        if(isCatching[pokemon.id]){
            pokemonsCatching.push(pokemon)
        };
    })

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

    if(pokemonsCatching.length===0){
        return (<div>Elige el mejor equipo de tu rancho y sé un Maestro Pokemon</div>) 
     }

    return(
        <>
            <h1>My Team</h1>
            <section id="my-team">
                {pokemonsCatching.map(pokemon=>(
                    <TeamPokemon key={pokemon.id} myPokemons={pokemon}/>
                ))}
            </section>
        </>
    )
}

export default MyTeam