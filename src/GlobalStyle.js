import { createGlobalStyle } from "styled-components";

const styled = { createGlobalStyle };

const GlobalStyle = styled.createGlobalStyle`
  :root {
    --Dark-Blue: hsl(240, 38%, 20%);
    --Grayish-Blue: hsl(240, 18%, 77%);
    --White: hsl(0, 0%, 100%);

    --Font-Family: "Inter", sans-serif;
  }

  * {
    box-sizing: border-box;
    font-family: var(--Font-Family);
  }

  body {
    margin: 0;
  }
`;

export default GlobalStyle;
