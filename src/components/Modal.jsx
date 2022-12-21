import Modal from "react-bootstrap/Modal";

export default function InfoPokemonModal({ show, handleClose }) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Pikachuu</Modal.Title>
      </Modal.Header>
      <Modal.Body>Información sobre Pikachu :3</Modal.Body>
    </Modal>
  );
}
