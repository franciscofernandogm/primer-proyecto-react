import { useEffect, useState } from 'react';
import {PokemonCard} from './PokemonCard.jsx';
import './Pokemon.css'

export function Results(allPokemons){

    const [pokemons,setPokemons]=useState({
        pokemons:allPokemons.allPokemons,
        isFiltered:false
    })

    const handleSearch=(searchTerm)=> {
        
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

    const handleChange = (event) => {
        const searchTerm = event.target.value;
        handleSearch(searchTerm);
    };
    
    return(
        <>  
            <div className="search">
                <input type="text" placeholder="Buscar..." onChange={handleChange} />
            </div>
            <section id='tw-follow'>
                {pokemons.pokemons.map(pokemon=>(
                    
                    <PokemonCard 
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

