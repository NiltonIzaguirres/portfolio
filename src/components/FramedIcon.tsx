import styled from "styled-components";

const FramedIconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background-color: ${(props) => props.theme.colors.backgroundHighlight};
  border: 1px solid ${(props) => props.theme.colors.primaryMedium};
  border-radius: 4px;
  font-size: 1.8rem;
  color: ${(props) => props.theme.colors.secondary};
`;

interface FramedIconProps {
  icon: JSX.Element;
}

export function FramedIcon({ icon }: FramedIconProps) {
  return <FramedIconContainer>{icon}</FramedIconContainer>;
}
