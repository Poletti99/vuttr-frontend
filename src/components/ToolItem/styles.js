import styled from 'styled-components';

export const Container = styled.div`
  border: 1px solid #ebeaed;
  padding: 5px;
  margin: 10px 0;
  font-size: 18px;
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.07);
  opacity: 1;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
`;

export const Description = styled.p``;

export const Title = styled.a`
  font-size: 20px;
`;

export const Tags = styled.div`
  font-weight: bold;
`;

export const RemoveButton = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 85px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 16px;
  color: #365df0;

  &:hover {
    color: #2f55cc;
  }

  &:active {
    color: #244aa8;
  }

  img {
    max-width: 12px;
  }
`;
