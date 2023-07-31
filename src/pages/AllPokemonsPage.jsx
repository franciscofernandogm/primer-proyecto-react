/*import foto1 from './img/foto-perfil-1.jpg';
import foto2 from './img/foto-perfil-2.jpg';
import foto3 from './img/foto-perfil-3.jpeg';*/
import { useState,useEffect } from 'react';
import {Results} from '../components/Pokemons/KantoPokemons';
import {Slider} from '../components/Slider/Slider'

const AllPokemons=({pokemons,isCatching,changeIsCatching})=>{

    const pokemonsPorPagina=18
    const totalPaginas = Math.ceil(pokemons.length / pokemonsPorPagina);

    const [paginaActual, setPaginaActual] = useState({
        pagina:1,
        pokemonsPaginados: pokemons.slice(0, pokemonsPorPagina),
        isFiltered:false
    });

    const calcularPokemonsPaginados=(pag)=>{
        const indexUltimoPokemon = pag * pokemonsPorPagina;
        const indexPrimerPokemon = indexUltimoPokemon - pokemonsPorPagina;
        const pokemonsPaginados = pokemons.slice(indexPrimerPokemon, indexUltimoPokemon);
        return pokemonsPaginados
    }

    const changePageBack=()=>{
        setPaginaActual({
            ...paginaActual,
            pagina:paginaActual.pagina - 1,
            pokemonsPaginados: calcularPokemonsPaginados(paginaActual.pagina - 1)
        })
    }

    const changePageThen=()=>{
        setPaginaActual({
            ...paginaActual,
            pagina:paginaActual.pagina + 1,
            pokemonsPaginados: calcularPokemonsPaginados(paginaActual.pagina + 1)
        })
    }

    const changePage=(pag)=>{
        setPaginaActual({
            ...paginaActual,
            pagina:pag,
            pokemonsPaginados: calcularPokemonsPaginados(pag)
        })
    }

    const handleSearch=(searchTerm)=> {
        
        if(searchTerm===''){
            setPaginaActual({
                ...paginaActual,
                pagina:1,
                pokemonsPaginados: pokemons.slice(0, pokemonsPorPagina),
                isFiltered:false
            })
        }else{
            const filteredPokemons = pokemons.filter((kantoPokemon) =>
                kantoPokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setPaginaActual({
                ...paginaActual,
                pokemonsPaginados:filteredPokemons,
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
            <h1>Kanto's Pokemons</h1>
            <div className="search">
                <input type="text" placeholder="Buscar..." onChange={handleChange} />
            </div>
            <Slider totalPaginas={totalPaginas} changePageBack={changePageBack} changePageThen={changePageThen} changePage={changePage} paginaActual={paginaActual}/>
            <Results allPokemons={paginaActual.pokemonsPaginados} isCatching={isCatching} changeIsCatching={changeIsCatching}/>
            <Slider totalPaginas={totalPaginas} changePageBack={changePageBack} changePageThen={changePageThen} changePage={changePage} paginaActual={paginaActual}/>
        </>
    )
}

export default AllPokemons