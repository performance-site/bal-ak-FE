import { createGlobalStyle } from 'styled-components';
import 'pretendard/dist/web/variable/pretendardvariable.css';

const GlobalStyle = createGlobalStyle`
    :root {
        --vh: 100%;
        --font-family: "Pretendard Variable", Pretendard, sans-serif;
    }

    html, body, #root {
        height: 100%;
        overflow: hidden;
        font-family: var(--font-family);
    }

    html {
        -webkit-touch-callout: none;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        -webkit-text-size-adjust: 100%;
        scroll-behavior: smooth;
        font-size: clamp(45%, 1vw + 0.5rem, 62.5%);
    }

    body {
        touch-action: manipulation;
        background-size: 100%;
        background-repeat: repeat;
        display: flex;
        justify-content: center;
    }
    
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, 
    a, abbr, acronym, address, big, cite, 
    del, em, strong, dfn,  img, ins, kbd, q, s, samp,
    small, strike,  sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, menu, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed,
    figure, figcaption, footer, header, hgroup,
    main, menu, nav, output, ruby, section, summary,
    time, mark, audio, video, button {
        margin: 0;
        border: 0;
        padding: 0;
        vertical-align: baseline;
        font-family: inherit;
    }

    article, aside, details, figcaption, figure,
    footer, header, hgroup, main, menu, nav, section {
        display: block;
    }

    *[hidden] {
        display: none;
    }

    menu, ol, ul {
        list-style: none;
    }

    
    blockquote, q {
        quotes: none;
    }

    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }

    table {
        border-collapse: collapse;
        border-spacing: 0;
        width: 100%;
    }

    * {
        box-sizing: border-box;
        font-synthesis: none;
    } 
    
    ul, li, ol {
        padding: 0;
        margin: 0;
        list-style: none;
    }
    
    a {
        text-decoration: none;
        color: inherit;
    }

    input, button {
        outline: none; 
        border: none;
        background-color: transparent;
    }

    button {
        cursor: pointer;
    }

    input {
        appearance: none;
        
        &:focus {
            outline: none;
        }
    }

    textarea {
        resize: none;
        overflow: auto;
    }

    select {
        border: none;

        &:focus {
            outline: none;
        }
    }

    .scroll {
        -ms-overflow-style: none;
        scrollbar-width: none;

        &::-webkit-scrollbar {
            display: none;
        }
    }

    .pageContainer {
        width: 393px;
        min-height: 100vh;
        background: ${({ theme }) => theme.gradients.background};
        background-size: 105% 105%;
        background-position: center;
        color: ${({ theme }) => theme.colors.white};
        position: relative;
        overflow-y: auto;
        -webkit-overflow-scrolling: touch;
        animation: gradientWave 45s ease-in-out infinite;

        @media screen and (max-width: 392px) {
            width: 100vw;
        }

        /* 무대 조명 효과 - 주황빛 spotlight */
        &::after {
            content: '';
            position: fixed;
            top: 20%;
            right: 15%;
            width: 150px;
            height: 150px;
            background: radial-gradient(circle, rgba(255, 140, 60, 0.15) 0%, rgba(255, 100, 40, 0.08) 30%, transparent 70%);
            border-radius: 50%;
            animation: spotlightGlow 8s ease-in-out infinite;
            pointer-events: none;
            z-index: 0;
            filter: blur(30px);
        }

        > * {
            position: relative;
            z-index: 1;
        }
    }

    @keyframes gradientWave {
        0% {
            background-position: 50% 50%;
        }
        25% {
            background-position: 52% 51%;
        }
        50% {
            background-position: 48% 52%;
        }
        75% {
            background-position: 51% 48%;
        }
        100% {
            background-position: 50% 50%;
        }
    }

    @keyframes spotlightGlow {
        0%, 100% {
            opacity: 0.3;
            transform: scale(1);
        }
        50% {
            opacity: 0.6;
            transform: scale(1.2);
        }
    }
`;

export default GlobalStyle;
