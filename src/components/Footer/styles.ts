import styled from "styled-components";

export const FooterContainer = styled.footer`
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.colors.backgroundHighlight};
  border-top: 2px solid ${props => props.theme.colors.primaryMedium};

  a {
    margin-bottom: 0.7rem;
  }
`