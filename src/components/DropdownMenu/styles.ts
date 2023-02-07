import styled, {css} from "styled-components";

interface DropdownMenuContainerProps {
  showOptions?: boolean;
}

export const DropdownMenuContainer = styled.div<DropdownMenuContainerProps>`
  position: relative;
  width: 270px;
  height: 50px;

  &::before {
    content: "";
    position: absolute;
    width: 8px;
    height: 8px;
    right: 20px;
    top: 15px;
    z-index: 8;
    border: 2px solid ${(props) => props.theme.colors.textHighlight};
    border-top: 2px solid ${(props) => props.theme.colors.backgroundHighlight};
    border-right: 2px solid ${(props) => props.theme.colors.backgroundHighlight};
    transform: rotate(-45deg);
    transition: 0.5s;
    pointer-events: none;
  }

  input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
    border: 1px solid transparent;
    box-shadow: 0 5px 20px rgba(0,0,0,0.3);
    background-color: ${(props) => props.theme.colors.backgroundHighlight};
    outline: none;
    padding: 0.8rem 1.22rem;
    border-radius: 4px;
    color: ${(props) => props.theme.colors.textHighlight};
    transition: 0.2 all;

    &:hover {
      border: 1px solid ${props => props.theme.colors.secondary};
    }
  }

  & > div {
    z-index: 9;
    position: absolute;
    max-height: 298px;
    top: 70px;
    width: 100%;
    background: ${(props) => props.theme.colors.backgroundHighlight};
    box-shadow: 0 10px 30px rgba(0,0,0,0.3);
    border: none;
    border-radius: 4px;
    overflow-x: hidden;

    & > div {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      padding: 0.8rem 1.22rem;
      cursor: pointer;
      transition: 0.2s all;

      &:hover {
        background-color: ${(props) => props.theme.colors.secondary};
        color: ${(props) => props.theme.colors.buttonText};
      }

      svg {
        font-size: 1.2rem;
      }

      span {
        margin-left: 0.5rem;
      }
    }
  }

  ${(props) =>
    !props.showOptions &&
    css`
      &::before {
        top: 22px;
        transform: rotate(-225deg);
      }
      & > div {
        display: none;
      }
    `}
`;