import React, { useState } from 'react';
import { Container, TitleContainer, Title, Description, Tags } from './styles';
import DeleteToolModal from '../DeleteToolModal';

function Tool({ title, link, description, tags, id, handleDelete }) {
  const [deleteModallOpen, setDeleteModalOpen] = useState(false);

  function onOpenModal() {
    setDeleteModalOpen(true);
  }

  function onCloseModal() {
    setDeleteModalOpen(false);
  }

  return (
    <Container>
      <DeleteToolModal
        onClose={onCloseModal}
        open={deleteModallOpen}
        handleDelete={() => handleDelete(id)}
        toolTitle={title}
      />
      <TitleContainer>
        <Title href={link}>{title}</Title>
        <button onClick={onOpenModal}>X Remover</button>
      </TitleContainer>
      <Description>{description}</Description>
      <Tags>{tags}</Tags>
    </Container>
  );
}

export default Tool;
