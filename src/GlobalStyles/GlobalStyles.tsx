import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle<{ themes: boolean }>`
@import url('https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap');
    *{
     margin: 0;
     padding: 0;
     box-sizing: border-box;
    }

    body{
        font-family: "Space Mono", monospace;
        min-height: 100vh;
        background: ${(props) =>
          props.themes ? "rgb(246, 248, 255)" : "rgb(20, 29, 47)"};
          transition: 0.3s ease;

    }
`;

export { GlobalStyles };
