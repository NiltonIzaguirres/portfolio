import { createElement } from "react";
import { CardContainer } from "./styles";

interface CardProps {
  title: string;
  icon: JSX.Element;
}

export function Card({ title, icon }: CardProps) {
  return (
    <CardContainer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.2 }}
      variants={{
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0 },
      }}
    >
      {icon}
      <h2>{title}</h2>
    </CardContainer>
  );
}
