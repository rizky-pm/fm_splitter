import { createGlobalStyle } from 'styled-components/macro';

const GlobalStyles = createGlobalStyle`
    *,
    *::after,
    *::before {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 18px;
    }

    body {
        color: ${(props) => props.theme.colors.firstDarkGrayishCyan};
        background-color: ${(props) =>
            props.theme.colors.firstLightGrayishCyan};
        font-family: 'Space Mono', monospace;
    }
`;

export default GlobalStyles;
