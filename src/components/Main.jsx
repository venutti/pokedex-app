import React from "react";
import PaginationContent from "./Pagination";
import PokemonList from "./PokemonList";

const pokemonSample = [
  "Bulbasaur",
  "Charmander",
  "Pikachu",
  "Squirtle",
  "Articuno",
  "Celebi",
  "Staraptor",
  "Torterra",
  "Espeon",
  "Chansey",
];

export default function Main() {
  return (
    <>
      <PaginationContent />
      <PokemonList pokemonList={pokemonSample} />
    </>
  );
}
