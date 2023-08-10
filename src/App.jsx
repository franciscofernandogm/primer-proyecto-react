import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout.jsx'
import AllPokemons from './pages/AllPokemonsPage.jsx';
import MyTeam from './pages/MyTeamPage.jsx';
import MyRanch from './pages/MyRanchPage.jsx';
import { useDispatch } from 'react-redux';
import { getPokemons } from "./services/pokemons.js";
import { useEffect } from 'react';
import './css/App.css'

export function App () {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPokemons()); // Obtener los datos del API
      }, [dispatch]);

    return (
        <>
            <Router>
                <Routes>
                    <Route path='/' element={<Layout/>}>
                        <Route path='/' element={<AllPokemons/>} />
                        <Route path='/my-team' element={<MyTeam/>} />
                        <Route path='/my-ranch' element={<MyRanch/>} />
                    </Route>
                </Routes>
            </Router>
        </>
    )
}