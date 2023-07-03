import { useEffect, useState } from "react";

export default function PokemonList() {
  const [pokemon, setPokemon] = useState([]);
  const [nextPage, setNextPage] = useState(null);
  const [prevPage, setPrevPage] = useState(null);

  useEffect(() => {
    async function loadPokemon() {
      try {
        const response = await fetch(
          "https://pokeapi.co/api/v2/pokemon?offset=0"
        );
        const data = await response.json();
        setPokemon(data.results);
        setNextPage(data.next);
        setPrevPage(data.previous);
      } catch (error) {
        console.log(error);
      }
    }

    loadPokemon();
  }, []);

  const handleNextPage = async () => {
    if (nextPage) {
      try {
        const response = await fetch(nextPage);
        const data = await response.json();
        setPokemon(data.results);
        setNextPage(data.next);
        setPrevPage(data.previous);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handlePrevPage = async () => {
    if (prevPage) {
      try {
        const response = await fetch(prevPage);
        const data = await response.json();
        setPokemon(data.results);
        setNextPage(data.next);
        setPrevPage(data.previous);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <main>
      <button type="button" onClick={handlePrevPage} disabled={!prevPage}>
        Previous Page
      </button>
      <button type="button" onClick={handleNextPage} disabled={!nextPage}>
        Next Page
      </button>
      <ul>
        {pokemon.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </main>
  );
}
