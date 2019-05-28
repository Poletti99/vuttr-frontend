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

function Main() {
  const [tools, setTools] = useState([]);

  useEffect(function() {
    api.get('tools').then(resp => {
      setTools(resp.data);
    });
  }, []);

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
      <Title>VUTTR</Title>
      <Subtitle>Very Useful Tools to Remember</Subtitle>
      <ActionContainer>
        <SearchContainer>
          <input type="text" />
          <input type="checkbox" />
        </SearchContainer>
        <button>+ Add</button>
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
