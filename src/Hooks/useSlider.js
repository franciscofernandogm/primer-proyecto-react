import { useEffect, useState } from "react";

export function useSlider(pokemonsPorPagina, pokemons) {
  const totalPaginas = Math.ceil(pokemons.length / pokemonsPorPagina);

  const [paginaActual, setPaginaActual] = useState({
    pagina: 1,
    pokemonsPaginados: pokemons.slice(0, pokemonsPorPagina),
    isFiltered: false,
  });

  useEffect(() => {
    setPaginaActual((prevPaginaActual) => ({
      ...prevPaginaActual,
      pokemonsPaginados: calcularPokemonsPaginados(paginaActual.pagina),
    }));
  }, [pokemons.length]);

  const calcularPokemonsPaginados = (pag) => {
    const indexUltimoPokemon = pag * pokemonsPorPagina;
    const indexPrimerPokemon = indexUltimoPokemon - pokemonsPorPagina;
    const pokemonsPaginados = pokemons.slice(
      indexPrimerPokemon,
      indexUltimoPokemon
    );
    return pokemonsPaginados;
  };

  const changePage = (pag) => {
    setPaginaActual({
      ...paginaActual,
      pagina: pag,
      pokemonsPaginados: calcularPokemonsPaginados(pag),
    });
  };

  const handleChange = (event) => {
    const searchTerm = event.target.value;

    if (searchTerm === "") {
      setPaginaActual({
        ...paginaActual,
        pagina: 1,
        pokemonsPaginados: pokemons.slice(0, pokemonsPorPagina),
        isFiltered: false,
      });
    } else {
      const filteredPokemons = pokemons.filter((kantoPokemon) =>
        kantoPokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setPaginaActual({
        ...paginaActual,
        pokemonsPaginados: filteredPokemons,
        isFiltered: true,
      });
    }
  };

  return {
    paginaActual,
    totalPaginas,
    changePage,
    handleChange,
  };
}
