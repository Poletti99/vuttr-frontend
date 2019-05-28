import React, { useState, useEffect } from 'react';

import {
  Container,
  Title,
  Subtitle,
  ActionContainer,
  SearchContainer,
  ToolsList
} from './styles';

import api from '../../services/api';

import Tool from '../../components/Tool';
import AddToolModal from '../../components/AddToolModal';

export default function Main() {
  const [tools, setTools] = useState([]);
  const [addModalOpen, setAddModalOpen] = useState(false);

  useEffect(function() {
    api.get('tools').then(resp => {
      setTools(resp.data);
    });
  }, []);

  function toglleAddModal() {
    setAddModalOpen(!addModalOpen);
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

  function handleSubmit(data) {
    api.post('/tools', data).then(resp => {
      setTools([...tools, resp.data]);
    });
  }

  return (
    <Container>
      <AddToolModal
        onClose={toglleAddModal}
        open={addModalOpen}
        handleSubmit={handleSubmit}
      />

      <Title>VUTTR</Title>
      <Subtitle>Very Useful Tools to Remember</Subtitle>
      <ActionContainer>
        <SearchContainer>
          <input type="text" />
          <input type="checkbox" />
        </SearchContainer>
        <button onClick={toglleAddModal}>+ Add</button>
      </ActionContainer>

      <ToolsList>
        {tools.map(tool => (
          <Tool key={tool.id} handleDelete={handleDelete} {...tool} />
        ))}
      </ToolsList>
    </Container>
  );
}
