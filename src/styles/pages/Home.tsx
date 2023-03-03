import { motion } from "framer-motion";
import styled, { css } from "styled-components";

export const Main = styled.main`
  width: 100%;
  height: 100%;
  max-width: 1280px;
  margin: auto;
  padding: 0 2rem;
  overflow: hidden;
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
    z-index: 2;

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

export const SquareAnimation = styled.ul`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
  overflow: hidden;

  li {
    position: absolute;
    display: block;
    list-style: none;
    width: 20px;
    height: 20px;
    background: ${(props) =>
      props.theme.title === "light"
        ? css`rgba(0, 0, 0, 0.2)`
        : css`rgba(255, 255, 255, 0.2)`};
    animation: animate 20s linear infinite;
    bottom: -150px;
    z-index: -1;
  }

  li:nth-child(1) {
    left: 25%;
    width: 80px;
    height: 80px;
    animation-delay: 0s;
  }

  li:nth-child(2) {
    left: 10%;
    width: 20px;
    height: 20px;
    animation-delay: 2s;
    animation-duration: 12s;
  }

  li:nth-child(3) {
    left: 70%;
    width: 20px;
    height: 20px;
    animation-delay: 4s;
  }

  li:nth-child(4) {
    left: 40%;
    width: 60px;
    height: 60px;
    animation-delay: 0s;
    animation-duration: 18s;
  }

  li:nth-child(5) {
    left: 65%;
    width: 20px;
    height: 20px;
    animation-delay: 0s;
  }

  li:nth-child(6) {
    left: 75%;
    width: 110px;
    height: 110px;
    animation-delay: 3s;
  }

  li:nth-child(7) {
    left: 35%;
    width: 150px;
    height: 150px;
    animation-delay: 7s;
  }

  li:nth-child(8) {
    left: 50%;
    width: 25px;
    height: 25px;
    animation-delay: 15s;
    animation-duration: 45s;
  }

  li:nth-child(9) {
    left: 20%;
    width: 15px;
    height: 15px;
    animation-delay: 2s;
    animation-duration: 35s;
  }

  li:nth-child(10) {
    left: 85%;
    width: 150px;
    height: 150px;
    animation-delay: 0s;
    animation-duration: 11s;
  }

  @keyframes animate {
    0% {
      transform: translateY(0) rotate(0deg);
      opacity: 1;
      border-radius: 0;
    }

    100% {
      transform: translateY(-1000px) rotate(720deg);
      opacity: 0;
      border-radius: 50%;
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

export const AboutMeSection = styled(motion.section)`
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
      font-weight: 500;
      font-size: 1.3rem;
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

export const SkillsSection = styled(motion.section)`
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

export const ContactSection = styled(motion.section)`
  & > h2 {
    margin-bottom: 4rem;
  }

  & > section {
    margin-bottom: 2rem;
  }
`;

interface ContactInfoProps {
  $breakWord?: boolean;
}

export const ContactInfo = styled(motion.div)<ContactInfoProps>`
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
      props.$breakWord &&
      css`
        span {
          word-break: break-all;
        }
      `}
  }
`;
