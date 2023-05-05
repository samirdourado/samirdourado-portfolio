import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        font-family: 'Roboto', 'Gill Sans', 'Gill Sans MT', 'Trebuchet MS', sans-serif;        
    }

    body {
        background-color: var(--black);
    }

    :root {
        --colorA: #DAA520;
        --colorB: #B8860B;
        --white: #ffffff;
        --black: #000000;
        --grey1: #828282;
        --grey2: #232323;

        --title1: 1.70rem; /*20px;*/
        --title2: 1.25rem; /*20px;*/
        --title3:  1.125rem; /*18px;*/
        --title4: 1rem; /*16px;*/
        --title5: 0.875rem; /*14px;*/
        --title6: 0.75rem; /*12px;*/
        --title7: 0.625rem; /*12px;*/
    }
`