import React, { useState, useEffect } from "react";
import PaginationContent from "./Pagination";
import PokemonList from "./PokemonList";
import axios from "axios";
import formatPokemonName from "../utils/formatPokemonName";

export default function Main() {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(
    "https://pokeapi.co/api/v2/pokemon?offset=0&limit=20"
  );
  const [prevPage, setPrevPage] = useState("");
  const [nextPage, setNextPage] = useState("");

  useEffect(() => {
    setLoading(true);
    axios.get(currentPage).then((res) => {
      setPrevPage(res.data.previous);
      setNextPage(res.data.next);
      setPokemons(
        res.data.results.map((pokemon) => formatPokemonName(pokemon.name))
      );
      setLoading(false);
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
        currentPage={currentPage}
      />
      <PokemonList pokemonList={pokemons} loading={loading} />
    </>
  );
}
