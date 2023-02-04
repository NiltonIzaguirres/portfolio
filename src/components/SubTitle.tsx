import { HTMLAttributes } from "react";
import styled from "styled-components";

const SubTitleText = styled.h2`
  position: relative;
  font-size: 2.25rem;
  font-weight: bold;
  color: ${(props) => props.theme.colors.textHighlight};

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -5px;
    width: 100px;
    height: 5px;
    border-radius: 4px;
    background-color: ${(props) => props.theme.colors.secondary};
  }
`;

interface SubTitleProps extends HTMLAttributes<HTMLHeadingElement> {
  title: string;
}

export function SubTitle({ title, ...rest }: SubTitleProps) {
  return <SubTitleText {...rest}>{title}</SubTitleText>;
}
