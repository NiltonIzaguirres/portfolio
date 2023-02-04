import styled from "styled-components";

export const FourOhFourContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  div {
    padding: 0.5rem;

    h1 {
      margin-bottom: 2rem;
      font-size: 2.5rem;
      color: ${(props) => props.theme.colors.textHighlight};
    }

    p {
      font-size: 1.1rem;
      color: ${(props) => props.theme.colors.text};
      margin-bottom: 2rem;
    }

    a {
      padding: 0.7rem 2rem;
      border: 0;
      border-radius: 4px;
      background: ${(props) => props.theme.colors.secondary};
      color: ${(props) => props.theme.colors.buttonText};
      font-weight: 600;
      transition: 0.2 opacity;

      &:hover {
        opacity: 0.6;
      }
    }
  }

  @media only screen and (max-width: 1250px) {
    img {
      width: 300px;
      height: 300px;
    }
  }

  @media only screen and (max-width: 1000px) {
    display: flex;
    flex-direction: column;
  }

  @media only screen and (max-width: 700px) {
    h1 {
      font-size: 2.1rem;
    }
    p {
      font-size: 0.7rem;
    }
  }
  @media only screen and (max-width: 400px) {
    img {
      width: 200px;
      height: 200px;
    }
  }
`;
