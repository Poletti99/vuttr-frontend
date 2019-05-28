import React from 'react';
import { Container, TitleContainer, Title, Description, Tags } from './styles';

function Tool({ title, link, description, tags, id, handleDelete }) {
  return (
    <Container>
      <TitleContainer>
        <Title href={link}>{title}</Title>
        <button onClick={() => handleDelete(id)}>X Remover</button>
      </TitleContainer>
      <Description>{description}</Description>
      <Tags>{tags.join(' #')}</Tags>
    </Container>
  );
}

export default Tool;
