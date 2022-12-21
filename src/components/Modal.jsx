import Placeholder from "react-bootstrap/Placeholder";
import Spinner from "react-bootstrap/Spinner";
import Modal from "react-bootstrap/Modal";
import formatPokemonName from "../utils/formatPokemonName";
import TypePill from "./TypePill";

const displayPlaceholder = () => {
  return (
    <>
      <Modal.Header closeButton>
        <Placeholder xs={6} />
      </Modal.Header>
      <Modal.Body>
        <Spinner animation="border" />
      </Modal.Body>
    </>
  );
};

const displayPokemon = (pokemon) => {
  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title>{formatPokemonName(pokemon.name)}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img src={pokemon.img} alt={`Imagen de ${pokemon.name}`} />
        {pokemon.types.map((type) => (
          <TypePill key={type} type={type} />
        ))}
      </Modal.Body>
    </>
  );
};

export default function InfoPokemonModal({
  show,
  handleClose,
  loading,
  pokemon,
}) {
  return (
    <Modal show={show} onHide={handleClose}>
      {loading ? displayPlaceholder() : displayPokemon(pokemon)}
    </Modal>
  );
}
