import styled from "styled-components";

export const Main = styled.main`
  width: 100%;
  min-height: 100%;
  max-width: 1280px;
  margin: auto;
  padding: 0 2rem;
`;

export const Presentation = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: calc(100vh - 4rem);
  width: 100%;
  padding: 0.5rem 2rem;

  & > div {
    max-width: 50%;
    h1 {
      font-size: 2.3rem;
      color: ${(props) => props.theme.colors.textHighlight};
    }

    p {
      margin-top: 0.5rem;
      font-size: 1.3rem;
      font-weight: 500;
    }
  }

  @media only screen and (max-width: 1170px) {
    img {
      width: 430px;
      height: 350px;
    }
  }

  @media only screen and (max-width: 1170px) {
    img {
      width: 300px;
      height: 300px;
    }
  }

  @media only screen and (max-width: 760px) {
    padding: 0.5rem 0.5rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    div {
      max-width: 100%;
    }
  }

  @media only screen and (max-width: 340px) {
    img {
      width: 200px;
    }
  }
`;

export const Projects = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: -2rem;

  & > div:first-of-type {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
    grid-area: auto;
    gap: 1rem;
    align-items: center;
    justify-items: center;
    & > div {
      margin-bottom: 2.5rem;
    }
  }

  & > div:last-of-type {
    width: 100%;
    min-height: 400px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    grid-area: auto;
    gap: 1rem;
    align-items: center;
    justify-items: center;
    margin-bottom: 2rem;
  }
`;
