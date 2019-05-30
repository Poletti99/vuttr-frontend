import React from 'react';

import { StyledButton } from './styles';

export default function Button({
  text,
  width,
  height = '40px',
  onClick,
  fontSize = '20px',
}) {
  return (
    <StyledButton
      width={width}
      height={height}
      onClick={onClick}
      fontSize={fontSize}
    >
      {text}
    </StyledButton>
  );
}
