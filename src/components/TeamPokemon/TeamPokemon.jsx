import './TeamPokemon.css'

export function TeamPokemon({myPokemons}){

    function capitalizeFirstLetter(word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
      }

    return(
        <>
            <article className="my-pokemon-team">
                <h2>{capitalizeFirstLetter(myPokemons.name)}</h2>
                <img alt={myPokemons.name} src={myPokemons.sprites.other.dream_world.front_default}/>
            </article>
        </>
    )
}