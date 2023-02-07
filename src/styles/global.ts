import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  @media (max-width: 1000px) {
    html {
      font-style: 93.75%;
    }
  }

  @media (max-width: 720px) {
    html {
      font-style: 87.5%;
    }
  }

  html { scroll-behavior: smooth; }

  body {
    background: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
  }

  body, input, textarea, select, button {
    font: 400 1rem 'Inter', sans-serif;
  }

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ::-webkit-scrollbar {
      width: 10px;
      height: 10px;
  }
  ::-webkit-scrollbar-button {
    width: 0px;
    height: 0px;
  }
  ::-webkit-scrollbar-thumb {
    background: #A78BFA;
    border: 0px none #ffffff;
    border-radius: 50px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #8B5CF6;
  }
  ::-webkit-scrollbar-thumb:active {
    background: #C55CF6;
  }
  ::-webkit-scrollbar-track {
    background: ${props => props.theme.colors.primaryMedium};
    border: 1px none #fff;
  }
  ::-webkit-scrollbar-corner {
    background: transparent;
  }
`;
