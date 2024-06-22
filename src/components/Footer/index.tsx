import { useRouter } from "next/router";
import { FooterContainer } from "./styles";
import { ExternalLink } from "../ExternalLink";
import { footerTranslate } from "@/translate/texts";

export function Footer() {
  const { locale } = useRouter();

  const currentLocale = locale === "en-US" ? "en-US" : "pt-BR";
  const translations = footerTranslate[currentLocale];

  return (
    <FooterContainer>
      <ExternalLink
        href="https://github.com/NiltonIzaguirres/portfolio"
        target="_blank"
        rel="noreferrer"
        text={translations.code}
      />

      <p>{translations.copy} &copy; 2024, Nilton Izaguirres</p>
    </FooterContainer>
  );
}
