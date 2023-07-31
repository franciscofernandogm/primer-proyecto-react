import { useState } from 'react';
import {PokemonCard} from './PokemonCard.jsx';
import './Pokemon.css'

export function Results({allPokemons,isCatching, changeIsCatching}){
    return(
        <>  
            <section id='tw-follow'>
                {allPokemons.map(pokemon=>(
                    
                    <PokemonCard 
                        key={pokemon.id}
                        id={pokemon.id}
                        name={pokemon.name} 
                        types={pokemon.types.map(type => (
                            <span key={type.type.name}>@{type.type.name}</span>
                        ))}
                        img={pokemon.sprites.front_default}
                        isCatching={isCatching[pokemon.id]}
                        changeIsCatching={changeIsCatching}/>
                ))}
            </section>
        </>
    )
}

