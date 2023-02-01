import { useThemeMode } from "@/context/ThemeModeContext";
import styled from "styled-components";

const Text = styled.h1`
  color: ${(props) => props.theme.colors.text};
`;

export default function Home() {
  const { toggleTheme } = useThemeMode();
  return (
    <>
      <Text>Hello Word!</Text>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </>
  );
}
