import React, { useState, useEffect } from "react";
import axios from "axios";
import ListGroup from "react-bootstrap/ListGroup";
import Container from "react-bootstrap/Container";
import Placeholder from "react-bootstrap/Placeholder";
import InfoPokemonModal from "./Modal";

const displayPlaceholder = () => {
  return (
    <Placeholder as={ListGroup.Item} animation="glow">
      <Placeholder xs={6} />
    </Placeholder>
  );
};

const displayList = (pokemonList, onClick) => {
  return pokemonList.map((pokemon) => (
    <ListGroup.Item
      action
      key={pokemon}
      onClick={() => onClick(pokemon.toLowerCase())}
    >
      {pokemon}
    </ListGroup.Item>
  ));
};

export default function PokemonList({ pokemonList, loading }) {
  const [showModal, setShowModal] = useState(false);
  const [loadingPokemon, setLoadingPokemon] = useState(true);
  const [pokemon, setPokemon] = useState("pikachu");
  const [pokemonData, setPokemonData] = useState({});

  useEffect(() => {
    setLoadingPokemon(true);
    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`).then((res) => {
      const name = res.data.name;
      const types = res.data.types.map((elem) => elem.type.name);
      const img = res.data.sprites.other["official-artwork"].front_default;
      setPokemonData({ name, types, img });
      setLoadingPokemon(false);
    });
  }, [pokemon]);

  const showInfoPokemon = (pokemonName) => {
    setPokemon(pokemonName);
    setShowModal(true);
  };

  return (
    <>
      <Container>
        <ListGroup>
          {loading
            ? displayPlaceholder()
            : displayList(pokemonList, showInfoPokemon)}
        </ListGroup>
      </Container>
      <InfoPokemonModal
        show={showModal}
        handleClose={() => setShowModal(false)}
        loading={loadingPokemon}
        pokemon={pokemonData}
      />
    </>
  );
}
