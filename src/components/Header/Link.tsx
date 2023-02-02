import { ReactNode } from "react";
import NextLink, { LinkProps as NextLinkProps } from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";

interface LinkContainer {
  isPath: boolean;
}

const LinkContainer = styled.li<LinkContainer>`
  position: relative;
  color: ${(props) =>
    props.isPath
      ? props.theme.colors.primaryMedium
      : props.theme.colors.textHighlight};
  font-weight: 500;
  transition: 0.2s all;

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

  span {
    font-weight: 700;
    color: ${(props) => props.theme.colors.secondary};
  }
`;

interface LinkProps extends NextLinkProps {
  href: string;
  children: ReactNode;
}

export function Link({ href, children }: LinkProps) {
  const { asPath } = useRouter();
  const isPath = asPath === href ? true : false;

  return (
    <LinkContainer isPath={isPath}>
      <NextLink href={href}>{children}</NextLink>
    </LinkContainer>
  );
}
