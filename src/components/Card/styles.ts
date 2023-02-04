import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 272px;
  height: 318px;
  background: ${props => props.theme.colors.backgroundHighlight};
  border: 1px solid ${props => props.theme.colors.primaryMedium};
  margin-bottom: 2rem;

  & > svg {
    font-size: 7.5rem;
  }

  & > h2 {
    margin-top: 2rem;
    font-size: 2.25rem;
  }
`