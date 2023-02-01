import lightPalette from "@/styles/themes/light";
import darkPalette from "@/styles/themes/dark";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { ThemeProvider } from "styled-components";
import { parseCookies, setCookie } from "nookies";

interface ThemeModeContextData {
  theme: string;
  toggleTheme: () => void;
}

interface ThemeModeProviderProps {
  children: ReactNode;
}

const ThemeModeContext = createContext({} as ThemeModeContextData);

export function ThemeModeProvider({ children }: ThemeModeProviderProps) {
  const [theme, setTheme] = useState("light");

  const currentColorPalette = theme === "light" ? lightPalette : darkPalette;

  function toggleTheme() {
    const newTheme = theme === "light" ? "dark" : "light";

    setTheme(newTheme);
    setCookie(undefined, "niltonizaguirres.theme", newTheme, {
      maxAge: 60 * 60 * 24 * 30, // 30 days
      path: "/",
    });
  }

  useEffect(() => {
    const cookies = parseCookies();
    const currentTheme = cookies["niltonizaguirres.theme"];

    if (currentTheme === "light" || currentTheme === "dark") {
      setTheme(currentTheme);
    }
  }, []);

  return (
    <ThemeModeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      <ThemeProvider theme={currentColorPalette}>{children}</ThemeProvider>
    </ThemeModeContext.Provider>
  );
}

export const useThemeMode = () => useContext(ThemeModeContext);
