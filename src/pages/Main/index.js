import React, { useState, useEffect } from 'react';

import {
  Container,
  Title,
  Subtitle,
  ActionContainer,
  SearchContainer,
  CheckboxContainer,
  ToolsList,
} from './styles';

import SearchIcon from '../../assets/images/Icon-Search-2px.svg';

import api from '../../services/api';

import ToolItem from '../../components/ToolItem';
import AddToolModal from '../../components/AddToolModal';
import Button from '../../components/Button';

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
    data.tags = data.tags.split(' ');
    api.post('/tools', data).then(resp => {
      setTools([...tools, resp.data]);
      toglleAddModal();
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
          <img src={SearchIcon} alt="Search Icon" />
          <input
            type="text"
            onChange={handleChange}
            value={searchText}
            onKeyDown={handleKeyDown}
            placeholder={searchInTags ? 'Search in Tags Only' : 'Search'}
          />
          <CheckboxContainer>
            <input
              type="checkbox"
              onChange={toglleCheckbox}
              checked={searchInTags}
              id="tag-checkbox"
            />
            <label htmlFor="tag-checkbox">search in tags only</label>
          </CheckboxContainer>
        </SearchContainer>
        <Button onClick={toglleAddModal} width="200px" text="+ Add" />
      </ActionContainer>

      <ToolsList>
        {tools.map(tool => (
          <ToolItem key={tool.id} handleDelete={handleDelete} {...tool} />
        ))}
      </ToolsList>
    </Container>
  );
}
