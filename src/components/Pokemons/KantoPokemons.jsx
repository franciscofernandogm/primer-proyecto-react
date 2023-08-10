import {PokemonCard} from './PokemonCard.jsx';
import './Pokemon.css'
import { useSelector } from 'react-redux';

export function Results({allPokemons}){

    const isCatching=useSelector(state=>state.pokedex.isCatching)

    function capitalizeFirstLetter(word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
      }
    
    return(
        <>  
            <section id='tw-follow'>
                {allPokemons.map(pokemon=>(
                    
                    <PokemonCard 
                        key={pokemon.id}
                        id={pokemon.id}
                        name={capitalizeFirstLetter(pokemon.name)} 
                        types={pokemon.types.map(type => (
                            <span key={type.type.name} className={type.type.name}>
                                {capitalizeFirstLetter(type.type.name)}
                            </span>
                        ))}
                        img={pokemon.sprites.front_default}
                        isCatching={isCatching[pokemon.id]}/>
                ))}
            </section>
        </>
    )
}

