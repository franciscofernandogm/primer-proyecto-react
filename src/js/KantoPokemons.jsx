import { useEffect, useState } from 'react';
import {PokemonFollowCard} from './TwitterFollowCard.jsx';
import { SearchBar } from './Search.jsx';

export function Results(allPokemons){

    const [pokemons,setPokemons]=useState({
        pokemons:allPokemons.allPokemons,
        isFiltered:false
    })

    const handleSearch=(searchTerm)=> {
        // Lógica de búsqueda aquí (puedes usar APIs, datos estáticos, etc.)
        // Por ahora, solo simularemos una búsqueda simple.

        if(searchTerm===''){
            setPokemons({
                ...pokemons,
                pokemons:allPokemons.allPokemons,
                isFiltered:false
            })
        }else{
            const filteredPokemons = allPokemons.allPokemons.filter((kantoPokemon) =>
                kantoPokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setPokemons({
                ...pokemons,
                pokemons:filteredPokemons,
                isFiltered:true
            })
        }
      };
    
    return(
        <>  
            <SearchBar searching={handleSearch}/>
            <section id='tw-follow'>
                {pokemons.pokemons.map(pokemon=>(
                    
                    <PokemonFollowCard 
                        key={pokemon.id}
                        name={pokemon.name} 
                        types={pokemon.types.map(type => (
                            <span key={type.type.name}>@{type.type.name}</span>
                        ))}
                        img={pokemon.sprites.front_default}/>
                ))}
            </section>
        </>
    )
}

