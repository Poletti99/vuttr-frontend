import React from 'react';

import Modal from 'react-responsive-modal';

import { Form, InputContainer } from './styles';

export default function AddToolModal({ open, onClose }) {
  return (
    <Modal open={open} onClose={onClose}>
      + Add New Tool
      <Form>
        <InputContainer>
          <label htmlFor="">Tool Name</label>
          <input type="text" />
        </InputContainer>
        <InputContainer>
          <label htmlFor="">Tool Link</label>
          <input type="text" />
        </InputContainer>
        <InputContainer>
          <label htmlFor="">Tool description</label>
          <input type="text" />
        </InputContainer>
        <InputContainer>
          <label htmlFor="">Tags</label>
          <input type="text" />
        </InputContainer>
        <button>Add Tool</button>
      </Form>
    </Modal>
  );
}
