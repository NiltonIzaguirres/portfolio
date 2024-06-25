import { motion } from "framer-motion";
import styled from "styled-components";

export const ProjectDisplayContainer = styled(motion.div)`
  position: relative;
  width: 360px;
  height: 420px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.7rem;
  border-radius: 4px;
  background: ${props => props.theme.colors.backgroundHighlight};
  box-shadow: 0 10px 20px rgba(0,0,0,0.4);
  overflow: hidden;

  img {
    border-radius: 4px;
    width: 100%;
  }

  @media only screen and (max-width: 470px) { 
    width: 280px;
  }
`

export const InfoContainer = styled.div`
  width: 100%;
  margin: 0.8rem 0;

  h3 {
    color: ${props => props.theme.colors.textHighlight};
    margin-bottom: 0.5rem;
  }

  p {
    width: 100%;
    height: 67px;
    margin-top: 1.2rem;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 0.9rem;
    font-weight: 500;
  }
`;

export const APICode = styled.div`
  width: 100%;
  position: absolute;
  left: 0.6rem;
  bottom: 3rem;
  width: calc(100% - 1rem);
  display: flex;

  a {
    font-size: 0.8rem;
    text-decoration: underline;
    color: ${props => props.theme.colors.secondary}
    
  }

  a:hover {
    opacity: 0.8;
  }

`;

export const LinksContainer = styled.div`
  position: absolute;
  left: 0.5rem;
  bottom: 0.5rem;
  width: calc(100% - 1rem);
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${props=> props.theme.colors.secondary};
    color: ${props=> props.theme.colors.buttonText};
    padding: 0.5rem;
    font-size: 0.9rem;
    border-radius: 4px;
    cursor: pointer;
    transition: 0.2s all;

    span {
      margin-left: 0.5rem;
    }

    &:hover {
      opacity: 0.8;
    }
  }
`;