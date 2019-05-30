import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 20px;
`;

export const ModalBody = styled.div`
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  & > div {
    display: flex;
    justify-content: space-between;
  }
`;
