import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Layout from './components/Layout'
import AllPokemons from './pages/AllPokemonsPage';
import MyTeam from './pages/MyTeamPage';
import './css/App.css'

export function App () {
  return (
    <>
        <Router>
            <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route path='/' element={<AllPokemons/>} />
                    <Route path='/my-team' element={<MyTeam/>} />
                </Route>
            </Routes>
        </Router>
    </>
  )
}