import { createGlobalStyle } from "styled-components";

export const StyledApplication = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: monospace;
        color: #f1f1f1;
        transition: all .2s linear;
    }
    
    body {
        background-color: #1f1f1f;

        height: 100vh;
        width: 100%;
    }

    #root {
        height: 100%;
        width: 100%;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 2rem;
    }
`