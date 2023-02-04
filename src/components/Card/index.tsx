import { createElement } from "react";
import { CardContainer } from "./styles";

interface CardProps {
  title: string;
  icon: JSX.Element;
}

export function Card({ title, icon }: CardProps) {
  return (
    <CardContainer>
      {icon}
      <h2>{title}</h2>
    </CardContainer>
  );
}
