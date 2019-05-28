import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing: border-box;
    outline: 0;
  }

  body{
    font-family:'Source Sans Pro, Semibold';
    text-rendering:optimizeLegibility;
    -webkit-font-smoothing:antialiased;
    max-width:960px;
    margin: 0 auto;
  }

  html,body,#root{
    height: 100%;
  }
`;
