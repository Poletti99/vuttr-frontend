import React from 'react';

import Modal from 'react-responsive-modal';
import { Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { AddForm } from './styles';
import Button from '../Button';

const schema = Yup.object().shape({
  title: Yup.string().required('Este campo não pode estar vazio'),
  link: Yup.string().required('Este campo não pode estar vazio'),
  description: Yup.string().required('Este campo não pode estar vazio'),
  tags: Yup.string().required('Este campo não pode estar vazio'),
});

export default function AddToolModal({ open, onClose, handleSubmit }) {
  return (
    <Modal open={open} onClose={onClose} center>
      <AddForm schema={schema} onSubmit={handleSubmit}>
        + Add New Tool
        <label htmlFor="name">Tool Name</label>
        <Input name="title" id="name" placeholder="Type the Tool Name" />
        <label htmlFor="link">Tool Link</label>
        <Input name="link" id="link" placeholder="Type the Tool Link" />
        <label htmlFor="description">Tool Description</label>
        <Input
          multiline
          name="description"
          id="description"
          placeholder="Type the Tool Description"
        />
        <label htmlFor="tags">Tool Tags</label>
        <Input
          name="tags"
          id="tags"
          placeholder="Type the Tool Tags separeted by space"
        />
        <Button text="Add Tool" type="submit" />
      </AddForm>
    </Modal>
  );
}
