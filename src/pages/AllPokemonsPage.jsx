/*import foto1 from './img/foto-perfil-1.jpg';
import foto2 from './img/foto-perfil-2.jpg';
import foto3 from './img/foto-perfil-3.jpeg';*/
import { useState,useEffect } from 'react';
import axios from 'axios';
import {Results} from '../components/Pokemons/KantoPokemons';

const AllPokemons=()=>{
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
        return (
            <div id='pikachu-charging'>
                <p>Cargando...</p>
                <div>
                    <img className="pikachu" alt="Pikachu Cargando" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"/>
                </div>
            </div>)
    }

    return(
        <>  
            <h1>Kanto's Pokemons</h1>
            <Results allPokemons={kantoPokemon} />
        </>
    )
}

export default AllPokemons