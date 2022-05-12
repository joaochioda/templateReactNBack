// styles/globalStyles.js
import { createGlobalStyle } from "styled-components";

interface ThemeProps {
  theme: {
    background: string;
    titles: string;
    text: string;
    accent: string;
  };
}

export default createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        outline: 0;
        transition: 0.1s;
    } 
    .container {
        margin: auto;
        width: 50%;        
        padding: 10px;
        text-align: center;        
    }
    body {
        background: ${(props: ThemeProps) => props.theme.background};
        color: ${(props) => props.theme.text};        
    }
    h1 {
        color: ${(props: ThemeProps) => props.theme.titles};        
    }
    .accent {
        background-color: ${(props: ThemeProps) => props.theme.accent};
        color: ${(props: ThemeProps) => props.theme.text};
        height: 30px;
    }
`;
