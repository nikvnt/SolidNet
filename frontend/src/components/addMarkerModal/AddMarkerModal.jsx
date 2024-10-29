import React, { useState } from 'react';
import Modal from 'react-modal';
import './AddMarkerModal.css'

const AddMarkerModal = ({ isOpen, onRequestClose, onAddMarker }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddMarker(name, description);
    setName('');
    setDescription('');
    onRequestClose();
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      <h2>Adicionar Marcador</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Descrição:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <button type="submit">Adicionar Marcador</button>
        <button type="button" onClick={onRequestClose}>Cancelar</button>
      </form>
    </Modal>
  );
};

export default AddMarkerModal;
