import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${props => props.theme.colors['base-text']};
  }

  body {
    background: ${ props => props.theme.colors['base-background']};
    color: ${props => props.theme.colors['base-span']};
    -webkit-font-smoothoing: antialiased;
  }

  body, input, textarea, button {
    font: 400 1rem sans-serif;
  }
`;