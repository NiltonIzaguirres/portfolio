import { AnchorHTMLAttributes } from "react";
import styled from "styled-components";

const ExternalLinkContainer = styled.a`
  position: relative;
  transition: 0.2 all;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    width: 0;
    bottom: -3px;
    height: 3px;
    transition: 0.3s width;
    border-radius: 8px;
    background-color: ${(props) => props.theme.colors.secondary};
  }

  &:hover {
    &::after {
      width: 100%;
    }
  }
`;

interface ExternalLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  text: string;
}

export function ExternalLink({ text, ...rest }: ExternalLinkProps) {
  return <ExternalLinkContainer {...rest}>{text}</ExternalLinkContainer>;
}
