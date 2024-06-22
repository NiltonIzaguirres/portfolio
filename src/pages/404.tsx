import { FourOhFourContainer } from "@/styles/pages/404";
import { fourOhFourTranslate } from "@/translate/texts";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export default function FourOhFour() {
  const { locale } = useRouter();

  const currentLocale = locale === "en-US" ? "en-US" : "pt-BR";
  const translations = fourOhFourTranslate[currentLocale];

  return (
    <FourOhFourContainer>
      <div>
        <h1>{translations.title}</h1>
        <p>{translations.text}</p>
        <Link href="/">{translations.back}</Link>
      </div>

      <Image
        src={"/images/four-oh-four.svg"}
        width={500}
        height={500}
        alt={translations.imageAlt}
      />
    </FourOhFourContainer>
  );
}
