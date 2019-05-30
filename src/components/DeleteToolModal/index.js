import React from 'react';

import Modal from 'react-responsive-modal';

import Button from '../Button';

import { Title, ModalBody } from './styles';

export default function DeleteToolModal({
  open,
  onClose,
  toolTitle,
  handleDelete,
}) {
  return (
    <Modal open={open} onClose={onClose}>
      <ModalBody>
        <Title>X Remove Tool</Title>
        <p>
          Tem certeza que deseja remover <strong>{toolTitle}</strong>?
        </p>

        <div>
          <Button text={'Cancelar'} onClick={onClose} fontSize="16px" />
          <Button
            text={'Sim, remover'}
            onClick={handleDelete}
            fontSize="16px"
          />
        </div>
      </ModalBody>
    </Modal>
  );
}
