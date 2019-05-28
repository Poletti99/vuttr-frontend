import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
`;

export const Title = styled.h1`
  font-size: 42px;
`;
export const Subtitle = styled.h3`
  font-size: 30px;
`;

export const ActionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 40px 0;
  width: 100%;

  input {
    height: 50px;
    max-width: 100%;
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  width: 100%;

  input {
    margin-right: 10px;
  }
`;

export const CheckboxContainer = styled.div``;

export const ToolsList = styled.div``;
