import type { AppProps } from "next/app";
import { ThemeModeProvider } from "@/context/ThemeModeContext";
import { Header } from "@/components/Header";
import { GlobalStyles } from "@/styles/global";
import { Footer } from "@/components/Footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeModeProvider>
      <Header />
      <GlobalStyles />
      <Component {...pageProps} />
      <Footer />
    </ThemeModeProvider>
  );
}
