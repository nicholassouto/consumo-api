import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;

  }

  :root{
    font-size: 62.5%;
  }  

  body{
    background-color: ${({ theme }) => theme.dark.dark};
    color: ${({ theme }) => theme.light.light};
  }

  body, input, button, textarea{
    font-size: 1.6rem;
    outline: none;
    -webkit-font-smoothing: antialiased;
    font-family: ${({ theme }) => theme.fonts.roboto};
  }
  

  button, a {
    cursor: pointer;
    transition: filter 0.2s;
  }

  button:hover, a:hover {
    filter: brightness(0.9);
  }
`;
