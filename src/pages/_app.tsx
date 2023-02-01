import type { AppProps } from "next/app";
import { GlobalStyles } from "@/styles/global";
import { ThemeModeProvider } from "@/context/ThemeModeContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeModeProvider>
      <Component {...pageProps} />
      <GlobalStyles />
    </ThemeModeProvider>
  );
}
