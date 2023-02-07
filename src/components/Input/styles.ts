import styled from "styled-components";

export const InputContainer = styled.div`
  position: relative;
  width: 270px;
  height: 50px;

  input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 1px solid transparent;
    box-shadow: 0 5px 20px rgba(0,0,0,0.3);
    background-color: ${(props) => props.theme.colors.backgroundHighlight};
    outline: none;
    padding: 0.8rem 1.22rem;
    border-radius: 4px;
    color: ${(props) => props.theme.colors.textHighlight};
    transition: 0.2 all;

    &:focus {
      border: 1px solid ${props => props.theme.colors.secondary};
    }
  }
`