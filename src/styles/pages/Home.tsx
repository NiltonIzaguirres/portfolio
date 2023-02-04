import styled, { css } from "styled-components";

export const Main = styled.main`
  width: 100%;
  height: 100%;
  max-width: 1280px;
  margin: auto;
  padding: 0 2rem;
`;

export const WelcomeSection = styled.section`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: calc(100vh - 4rem);
  width: 100%;
  padding: 0.5rem 0;
  color: ${(props) => props.theme.colors.textHighlight};

  & > div:first-of-type {
    max-width: 42rem;

    p:first-child {
      font-weight: 600;
      font-size: 1.7rem;
    }

    h1 {
      font-weight: bold;
      font-size: 3.7rem;
    }

    p:nth-child(3) {
      font-size: 1.2rem;
      font-weight: 500;
      margin-bottom: 3rem;
      color: ${(props) => props.theme.colors.text};
    }

    a {
      border-radius: 8px;
      padding: 0.5rem 1.5rem;
      font-size: 1.5rem;
      font-weight: 600;

      ${(props) => css`
        background-color: ${props.theme.colors.secondary};
        color: ${props.theme.colors.buttonText};
      `};

      &:hover {
        opacity: 0.8;
      }
    }
  }

  & > img {
    border-radius: 8px;
    border: 4px solid ${(props) => props.theme.colors.secondary};
  }
`;

export const ScrollDown = styled.div`
  position: absolute;
  bottom: 1rem;
  left: calc(50% - 25px);
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;

  & > a {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    color: ${(props) => props.theme.colors.textHighlight};
  }
`;

export const AboutMeSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;

  & > div {
    max-width: 55%;

    & > h2 {
      margin-bottom: 2rem;
    }

    & > p {
      font-size: 1.3rem;
      font-weight: 500;
      line-height: 2rem;
      text-indent: 3rem;
    }

    p + p {
      margin-top: 0.5rem;
    }
  }

  & > img {
    border-radius: 8px;
    border: 4px solid ${(props) => props.theme.colors.secondary};
  }
`;

export const SkillsSection = styled.section`
  margin-top: 4rem;

  & > h2 {
    margin-bottom: 4rem;
  }

  & > section {
    margin-bottom: 2rem;
  }
`;

export const ContactSection = styled.section`
  & > h2 {
    margin-bottom: 4rem;
  }

  & > section {
    margin-bottom: 2rem;
  }
`;

export const ContactInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 0.8rem;

  span {
    margin-left: 1rem;
    font-weight: 500;
    font-size: 1.5rem;
  }
`;
