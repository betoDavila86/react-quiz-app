import styled, { createGlobalStyle } from "styled-components";
import beach from './assets/beach.jpg';

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        font-family: 'Catamaran', sans-serif;
        margin: 0;
        padding: 0;
    }

    html {
        height: 100vh;
    }

    body {
        background-image: url(${beach});
        background-size: cover;
        display: flex;
        justify-content: center;
    }
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    > p {
        color: #fff;
    }

    .score {
        color: #fff;
        font-size: 2rem;
        margin: 0;
    }

    h1 {
        font-family: 'Fascinate Inline', cursive;
        background-image: linear-gradient(180deg, #fff, #87f1ff);
        background-size: 100%;
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        -moz-background-clip: text;
        -moz-text-fill-color: transparent;
        filter: drop-shadow(2px 2px #0085a3);
        font-size: 70px;
        text-align: center;
        margin: 20px;
        font-weight: 400;
    }

    .start, .next {
        cursor: pointer;
        background: linear-gradient(180deg, #fff, #ffcc91);
        border: 2px solid #d38558;
        box-shadow: 0 5px 10px rgba(0,0,0,.25);
        border-radius: 10px;
        height: 40px;
        margin: 20px 0;
        padding: 0 40px;
        font-size: 1rem;
    }

    .start{
        max-width: 200px;
    }
`;