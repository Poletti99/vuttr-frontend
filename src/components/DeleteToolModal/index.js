import React from 'react';

import Modal from 'react-responsive-modal';

export default function DeleteToolModal({
  open,
  onClose,
  toolTitle,
  handleDelete
}) {
  return (
    <Modal open={open} onClose={onClose}>
      <h1>X Remove Tool</h1>
      <p>
        Tem certeza que deseja remover <strong>{toolTitle}</strong>?
      </p>

      <button onClick={onClose}>Cancelar</button>
      <button onClick={handleDelete}>Sim, remover</button>
    </Modal>
  );
}
