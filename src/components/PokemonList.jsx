import React, { useState, useEffect } from "react";
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
    <ListGroup.Item action key={pokemon} onClick={onClick}>
      {pokemon}
    </ListGroup.Item>
  ));
};

export default function PokemonList({ pokemonList }) {
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(true);

  useEffect(() => {
    if (!pokemonList) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [pokemonList]);

  return (
    <>
      <Container>
        <ListGroup>
          {loading
            ? displayPlaceholder()
            : displayList(pokemonList, () => setShowModal(true))}
        </ListGroup>
      </Container>
      <InfoPokemonModal
        show={showModal}
        handleClose={() => setShowModal(false)}
      />
    </>
  );
}
