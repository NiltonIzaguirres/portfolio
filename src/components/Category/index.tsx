import { CategoryContainer } from "./styles";
import { ReactElement } from "react";

interface CategoryProps {
  title: string;
  warn?: string;
  children: ReactElement | ReactElement[];
}

export function Category({ title, warn, children }: CategoryProps) {
  return (
    <CategoryContainer>
      <h3>{title}</h3>
      {warn && (
        <p>
          <span>*</span> {warn}
        </p>
      )}
      <div>{children}</div>
    </CategoryContainer>
  );
}
