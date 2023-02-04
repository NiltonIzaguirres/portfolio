import { FooterContainer } from "./styles";
import { ExternalLink } from "../ExternalLink";

export function Footer() {
  return (
    <FooterContainer>
      <ExternalLink
        href="https://github.com/NiltonIzaguirres/portfolio"
        target="_blank"
        rel="noreferrer"
        text="Código Fonte"
      />

      <p>Todos os direitos reservados &copy; 2023, Nilton Izaguirres</p>
    </FooterContainer>
  );
}
