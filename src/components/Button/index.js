import React from 'react';

import { StyledButton } from './styles';

export default function Button({ text, width, height = '40px', onClick }) {
  return (
    <StyledButton width={width} height={height} onClick={onClick}>
      {text}
    </StyledButton>
  );
}
