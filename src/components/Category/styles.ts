import styled from "styled-components";

export const CategoryContainer = styled.section`
  h3 {
    font-size: 2rem;
    margin-bottom: 0.5rem;
  }

  p {
    color: ${props => props.theme.colors.darkText};
    font-weight: 500;
    font-size: 1.1rem;
    margin-bottom: 0.75rem;
    
    span {
      color: ${props => props.theme.colors.secondary};
    }
  }
  
  & > div {
    display: grid;
    align-items: center;
    grid-template-columns: repeat(auto-fit, minmax( 272px,1fr));
    gap: 0.5rem;
  }
`;
