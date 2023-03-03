import { motion } from "framer-motion";
import styled, {css} from "styled-components";

export const ProjectDisplayContainer = styled(motion.div)`
  position: relative;
  width: 280px;
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
    height: 37px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 0.9rem;
    font-weight: 500;
  }
`;

export const TechContainer = styled.div`
  width: 100%;
  margin-bottom: 0.8rem;

  h4 {
    color: ${props => props.theme.colors.text};
    margin-bottom: 0.5rem;
  }

  p {
    display: flex;
    overflow-x: auto;
    overflow-y: hidden;
    white-space: nowrap;
    word-break: keep-all;
    font-weight: 500;

    ::-webkit-scrollbar {
      height: 4px;
    }
    ::-webkit-scrollbar-track        { 
      border-radius: 50px;
    }


    span  {
      padding: 0.1rem 0.3rem;
      margin-bottom: 0.3rem;
      border-radius: 4px;
      font-size: 0.7rem;
      background: ${props => props.theme.colors.primaryMedium};
      color: ${props => props.theme.colors.buttonText} ;
      & + span {
        margin-left: 0.3rem;
      }

      
    }
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