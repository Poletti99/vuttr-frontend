import React, { useState } from 'react';
import {
  Container,
  TitleContainer,
  Title,
  Description,
  TagsContainer,
  Tag,
  RemoveButton,
} from './styles';
import DeleteToolModal from '../DeleteToolModal';
import DeleteIcon from '../../assets/images/Icon-Close-2px.svg';

export default function ToolItem({
  title,
  link,
  description,
  tags,
  id,
  handleDelete,
}) {
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

        <RemoveButton onClick={onOpenModal}>
          <img src={DeleteIcon} alt="Delete Icon" />
          Remover
        </RemoveButton>
      </TitleContainer>
      <Description>{description}</Description>
      <TagsContainer>
        {tags.map(tag => (
          <Tag key={tag}>#{tag}</Tag>
        ))}
      </TagsContainer>
    </Container>
  );
}
