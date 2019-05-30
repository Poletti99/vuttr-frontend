import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 50px;
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
  align-items: center;
  margin: 40px 0;
  max-width: 100%;

  & > button {
    height: 40px;
    width: 200px;
    border-radius: 4px;
    background: #365df0;
    border: none;
    font-size: 20px;
    font-weight: bold;
    color: #fff;

    &:hover {
      background: #2f55cc;
    }

    &:active {
      background: #244aa8;
    }
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  width: 70%;

  & > input {
    padding: 4px;
    padding-right: 20px;
    height: 40px;
    margin-right: 10px;
    border: 1px solid #000;
    border-left: none;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    width: 60%;
    font-size: 16px;
  }

  img {
    border: 1px solid #000;
    border-right: none;
    border-bottom-left-radius: 10px;
    border-top-left-radius: 10px;
    max-height: 40px;
    padding: 5px;
  }
`;

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;

  & > input {
    margin: 3px;
    height: 20px;
    width: 20px;
  }
`;

export const ToolsList = styled.div``;
