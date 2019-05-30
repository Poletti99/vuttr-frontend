import styled from 'styled-components';

export const StyledButton = styled.button`
  height: ${props => props.height};
  width: ${props => props.width};
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
`;
