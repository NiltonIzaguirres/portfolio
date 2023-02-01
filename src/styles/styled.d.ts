import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;
    
    colors: {
      clearPrimary: string;
      primaryMedium: string;
      darkPrimary: string;
      secondary: string;
      background: string;
      backgroundHighlight: string;
      textHighlight: string;
      text: string;
      darkText: string;
      buttonText: string;
    }
  }
}