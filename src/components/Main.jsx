import React, { useState, useEffect } from "react";
import PaginationContent from "./Pagination";
import PokemonList from "./PokemonList";
import axios from "axios";
import formatPokemonName from "../utils/formatPokemonName";

export default function Main() {
  const [pokemons, setPokemons] = useState([]);
  const [currentPage, setCurrentPage] = useState(
    "https://pokeapi.co/api/v2/pokemon"
  );
  const [prevPage, setPrevPage] = useState("");
  const [nextPage, setNextPage] = useState("");

  useEffect(() => {
    axios.get(currentPage).then((res) => {
      setPrevPage(res.data.previous);
      setNextPage(res.data.next);
      setPokemons(
        res.data.results.map((pokemon) => formatPokemonName(pokemon.name))
      );
    });
  }, [currentPage]);

  const loadPrevPage = () => {
    setCurrentPage(prevPage);
  };
  const loadNextPage = () => {
    setCurrentPage(nextPage);
  };

  return (
    <>
      <PaginationContent
        onPrev={prevPage && loadPrevPage}
        onNext={nextPage && loadNextPage}
      />
      <PokemonList pokemonList={pokemons} />
    </>
  );
}
