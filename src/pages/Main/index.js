import React, { useState, useEffect } from 'react';

import {
  Container,
  Title,
  Subtitle,
  ActionContainer,
  SearchContainer,
  CheckboxContainer,
  ToolsList
} from './styles';

import api from '../../services/api';

import Tool from '../../components/Tool';
import AddToolModal from '../../components/AddToolModal';

export default function Main() {
  const [tools, setTools] = useState([]);
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [searchInTags, setSearchInTags] = useState(false);
  const [searchText, setSearchText] = useState('');

  useEffect(function() {
    api.get('tools').then(resp => {
      setTools(resp.data);
    });
  }, []);

  function toglleAddModal() {
    setAddModalOpen(!addModalOpen);
  }

  function toglleCheckbox() {
    setSearchInTags(!searchInTags);
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

  function handleKeyDown(e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      e.stopPropagation();
      handleSearch(searchText);
    }
  }

  function handleChange({ target: { value } }) {
    setSearchText(value);
  }

  function handleSearch(text) {
    api.get(`/tools?${searchInTags ? 'tags_like' : 'q'}=${text}`).then(resp => {
      setTools(resp.data);
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
          <input
            type="text"
            onChange={handleChange}
            value={searchText}
            onKeyDown={handleKeyDown}
          />
          <CheckboxContainer>
            <input
              type="checkbox"
              onChange={toglleCheckbox}
              checked={searchInTags}
            />
            search in tags only
          </CheckboxContainer>
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
