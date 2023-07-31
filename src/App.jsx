import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import { useState,useEffect } from 'react';
import axios from 'axios';
import Layout from './components/Layout'
import AllPokemons from './pages/AllPokemonsPage';
import MyTeam from './pages/MyTeamPage';
import './css/App.css'

export function App () {

    const [kantoPokemon, setKantoPokemon] = useState([]);
    const [isCatching, setIsCatching] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchKantoPokemon = async () => {
        const firstGenerationRange = Array.from({ length: 151 }, (_, index) => index + 1);
        let kantoPokemonList = [];
        let isCatchingList=[];

        for (const id of firstGenerationRange) {
            try {
                const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
                const data = response.data;
                kantoPokemonList.push(data);
                isCatchingList.push(false)
            } catch (error) {
                console.error('Error al hacer la solicitud:', error);
            }
        }

        setIsCatching(isCatchingList)
        setKantoPokemon(kantoPokemonList);
        setLoading(false);
        };

        fetchKantoPokemon();
    }, []);

    const changeIsCatching=(value, id)=>{
        const newCatchingList=[].concat(isCatching)
        newCatchingList[id]=value   
        setIsCatching(newCatchingList)
    }

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

    return (
        <>
            <Router>
                <Routes>
                    <Route path='/' element={<Layout/>}>
                        <Route path='/' element={<AllPokemons pokemons={kantoPokemon} isCatching={isCatching} changeIsCatching={changeIsCatching}/>} />
                        <Route path='/my-team' element={<MyTeam pokemons={kantoPokemon} isCatching={isCatching}changeIsCatching={changeIsCatching}/>} />
                    </Route>
                </Routes>
            </Router>
        </>
    )
}