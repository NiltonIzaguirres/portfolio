import styled, { css } from "styled-components";

interface OpenMobileMenuProps {
  isOpenMobileMenu?: boolean;
}

interface HeaderContainerProps {
  show?: boolean;
  fixedHeader?: boolean;
}

export const HeaderContainer = styled.header<HeaderContainerProps>`
  width: 100%;
  height: 4rem;

  ${(props) =>
    props.fixedHeader &&
    css`
      position: fixed;
      top: 0;
      left: 0;
      background-color: ${(props) =>
        props.theme.colors.background}E0; // EO is opacity for color in hex
      border-bottom: 2px solid ${(props) => props.theme.colors.secondary};
    `}
`;

interface HeaderContentProps extends OpenMobileMenuProps {}

export const HeaderContent = styled.div<HeaderContentProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  height: 4rem;
  padding: 0 2rem;
  max-width: 1440px;
  transition: 0.2s all;

  nav {
    display: flex;
    align-items: center;
    justify-content: center;
    list-style: none;
    font-size: 1.5rem;
  }

  @media only screen and (max-width: 700px) {
    nav {
      font-size: 1.4rem;
    }
  }

  @media only screen and (max-width: 650px) {
    ${(props) =>
      props.isOpenMobileMenu &&
      css`
        position: absolute;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background: ${props.theme.colors
          .background}E0; // EO is opacity for color in hex

        flex-direction: column;
        justify-content: center;

        nav {
          flex-direction: column;
          font-size: 1.5rem;
        }
      `}
  }

  @media only screen and (max-width: 350px) {
    nav {
      font-size: 1.1rem;
    }
  }
`;

interface LinkListProps extends OpenMobileMenuProps {}

export const LinkList = styled.ul<LinkListProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
  font-size: 1.3rem;

  li {
    margin-left: 1rem;
  }

  @media only screen and (max-width: 700px) {
    font-size: 1.1rem;
  }

  @media only screen and (max-width: 650px) {
    display: none;

    ${(props) =>
      props.isOpenMobileMenu &&
      css`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-size: 1.3rem;

        li {
          margin: 2rem 0 0 0;
        }
      `}
  }
`;

interface OptionsProps extends OpenMobileMenuProps {}

export const Options = styled.ul<OptionsProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;

  @media only screen and (max-width: 650px) {
    display: none;
    ${(props) =>
      props.isOpenMobileMenu &&
      css`
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 5rem;

        li {
          font-size: 1.5rem;

          button {
            font-size: 1.5rem;
          }
        }
      `}
  }
`;

export const Option = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  color: ${(props) => props.theme.colors.textHighlight};

  & + li {
    margin-left: 0.5rem;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 1 opacity;
    cursor: pointer;

    &:hover {
      opacity: 0.6;
    }
  }

  button {
    border: 0;
    background: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.1rem;
    color: ${(props) => props.theme.colors.textHighlight};
    cursor: pointer;
    transition: 1 opacity;

    &:hover {
      opacity: 0.6;
    }
  }

`;

export const Divider = styled.div`
  height: 1rem;
  width: 0.1rem;
  border-radius: 8px;
  opacity: 0.8;
  background: ${(props) => props.theme.colors.primaryMedium};

`;

interface OpenMobileMenu extends OpenMobileMenuProps {}

export const OpenMobileMenu = styled.button<OpenMobileMenu>`
  display: none;
  border: 0;
  background: transparent;
  font-size: 1.5rem;
  color: ${(props) => props.theme.colors.textHighlight};
  cursor: pointer;
  transition: 1 opacity;

  &:hover {
    opacity: 0.6;
  }

  @media only screen and (max-width: 650px) {
    display: flex;
    align-items: center;
    justify-content: center;

    ${(props) =>
      props.isOpenMobileMenu &&
      css`
        position: absolute;
        top: 1.3rem;
        right: 2rem;
      `}
  }
`;
