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

  @media only screen and (max-width: 1094px) {
    margin-top: 2rem;
    flex-direction: column;
    justify-content: center;

    & > img {
      margin: 2.3rem 0;
    }
  }

  @media only screen and (max-width: 800px) {
    & > img {
      width: 270px;
      height: 400px;
    }
  }

  @media only screen and (max-width: 319px) {
    & > div:first-of-type {
      p:first-child {
        font-size: 1.2rem;
      }

      h1 {
        font-size: 3rem;
      }

      p:nth-child(3) {
        font-size: 0.8rem;
      }

      a {
        font-size: 1rem;
      }
    }

    & > img {
      width: 200px;
      height: 400px;
    }
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

  @media only screen and (max-width: 1094px) {
    display: none;
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

  @media only screen and (max-width: 1094px) {
    justify-content: center;

    & > div {
      max-width: 70%;
    }

    & > img {
      display: none;
    }
  }

  @media only screen and (max-width: 800px) {
    & > div {
      max-width: 100%;
    }
  }
`;

export const SkillsSection = styled.section`
  margin-top: 4rem;

  & > h2 {
    margin-bottom: 4rem;
  }

  & > section {
    margin-bottom: 2rem;

    & > div {
      justify-items: center;
    }
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

interface ContactInfoProps {
  break?: boolean;
}

export const ContactInfo = styled.div<ContactInfoProps>`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 0.8rem;

  span {
    margin-left: 1rem;
    font-weight: 500;
    font-size: 1.3rem;
  }

  @media only screen and (max-width: 900px) {
    span {
      font-size: 1.1rem;
    }
  }

  @media only screen and (max-width: 778px) {
    span {
      margin-left: 0.5rem;
    }

    ${(props) =>
      props.break &&
      css`
        span {
          word-break: break-all;
        }
      `}
  }
`;
