import React from 'react';

import Modal from 'react-responsive-modal';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

const schema = Yup.object().shape({
  title: Yup.string().required('Este campo não pode estar vazio'),
  link: Yup.string().required('Este campo não pode estar vazio'),
  description: Yup.string().required('Este campo não pode estar vazio'),
  tags: Yup.string().required('Este campo não pode estar vazio'),
});
// import { Form, InputContainer } from './styles';

export default function AddToolModal({ open, onClose, handleSubmit }) {
  return (
    <Modal open={open} onClose={onClose}>
      + Add New Tool
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="title" />
        <Input name="link" />
        <Input name="description" />
        <Input name="tags" />

        <button type="submit">Add Tool</button>
      </Form>
    </Modal>
  );
}
