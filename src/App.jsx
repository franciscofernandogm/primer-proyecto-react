/*import foto1 from './img/foto-perfil-1.jpg';
import foto2 from './img/foto-perfil-2.jpg';
import foto3 from './img/foto-perfil-3.jpeg';*/
import { useState,useEffect } from 'react';
import CryptoJS from 'crypto-js';
import axios from 'axios';
import {PokemonFollowCard} from './TwitterFollowCard.jsx';
import { ButtonMarvelApi } from './MarvelApi';
import './App.css'

export function App(){
    const [kantoPokemon, setKantoPokemon] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchKantoPokemon = async () => {
        const firstGenerationRange = Array.from({ length: 151 }, (_, index) => index + 1);
        let kantoPokemonList = [];

        for (const id of firstGenerationRange) {
            try {
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
            const data = response.data;
            kantoPokemonList.push(data);
            } catch (error) {
            console.error('Error al hacer la solicitud:', error);
            }
        }

        setKantoPokemon(kantoPokemonList);
        setLoading(false);
        };

        fetchKantoPokemon();
    }, []);

    if (loading) {
        return <div>Cargando...</div>;
    }

    console.log(kantoPokemon)
    return(
        <>  
            <h1>Pokemons</h1>
            <section id='tw-follow'>
                {kantoPokemon.map(pokemon => (
                    <PokemonFollowCard 
                        key={pokemon.id}
                        name={pokemon.name} 
                        types={pokemon.types.map(type => (
                            <span key={type.type.name}>@{type.type.name}</span>
                        ))}
                        img={pokemon.sprites.front_default}/>
                ))}
            </section>
            <ButtonMarvelApi/>
        </>
    )
}