import { createGlobalStyle, css } from 'styled-components';

export const MarginsCompact = css`
  & * + * {
    margin-top: 0.75em;
  }
`;

export const MarginsOff = css`
  & * + * {
    margin-top: 0;
  }
`;

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  * + * {
    margin-top: 1.5em;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    margin: 0;
  }
`;

export default GlobalStyles;
