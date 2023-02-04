import type { AppProps } from "next/app";
import { ThemeModeProvider } from "@/context/ThemeModeContext";
import { Header } from "@/components/Header";
import { GlobalStyles } from "@/styles/global";
import { Footer } from "@/components/Footer";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const { asPath } = useRouter();

  const isErrorPage = asPath === "/404";

  return (
    <ThemeModeProvider>
      {isErrorPage || <Header />}
      <GlobalStyles />
      <Component {...pageProps} />
      {isErrorPage || <Footer />}
    </ThemeModeProvider>
  );
}
