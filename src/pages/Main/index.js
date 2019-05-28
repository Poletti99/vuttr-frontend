import React, { useState, useEffect } from 'react';

import {
  Container,
  Title,
  Subtitle,
  ActionContainer,
  SearchContainer,
  ToolsList,
} from './styles';

import api from '../../services/api';

import Tool from '../../components/Tool';
import AddToolModal from '../../components/AddToolModal';

function Main() {
  const [tools, setTools] = useState([]);
  const [modalOpen, setModalOpen] = useState(true);

  useEffect(function() {
    api.get('tools').then(resp => {
      setTools(resp.data);
    });
  }, []);

  function onOpenModal() {
    setModalOpen(true);
  }

  function onCloseModal() {
    setModalOpen(false);
  }

  function handleDelete(id) {
    api
      .delete(`/tools/${id}`)
      .then(() => {
        const filteredTools = tools.filter(tool => tool.id !== id);
        setTools(filteredTools);

        alert('Removido com sucesso');
      })
      .catch(error => {
        console.error(`Erro ao excluir ferramenta: ${error}`);
      });
  }

  return (
    <Container>
      <AddToolModal onClose={onCloseModal} open={modalOpen} />
      <Title>VUTTR</Title>
      <Subtitle>Very Useful Tools to Remember</Subtitle>
      <ActionContainer>
        <SearchContainer>
          <input type="text" />
          <input type="checkbox" />
        </SearchContainer>
        <button onClick={onOpenModal}>+ Add</button>
      </ActionContainer>

      <ToolsList>
        {tools.map(tool => (
          <Tool key={tool.id} handleDelete={handleDelete} {...tool} />
        ))}
      </ToolsList>
    </Container>
  );
}

export default Main;
