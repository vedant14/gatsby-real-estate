import { createGlobalStyle } from "styled-components"
import MuliRegular from "../fonts/Muli-Regular.woff"
import MuliBlack from "../fonts/Muli-Black.woff"

export const colors = {
  white: "#fff",
  darkGrey: "#1a1c20",
  purple: "#452475",
  deepDarkGrey: "#404040",
  blueShade1: "#215973",
  blueShade2: "#6fadc6",
  blueShade3: "#d1e1e9",
  ivory: "#fffff0",
}

export const lightTheme = {
  colors: {
    background: colors.white,
    menuBackground: colors.blueShade3,
    textDark: colors.blueShade1,
    textMain: colors.blueShade2,
    textSecondary: colors.deepDarkGrey,
  },
}

export const GlobalStyles = createGlobalStyle`
  :root {
    --site-max-width: 1200px;
  }

  @font-face {
    font-family: 'Muli Regular';
    src: local('Muli Regular'), local('MuliRegular'),
      url(${MuliRegular}) format('woff');
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: 'Muli Black';
    src: local('Muli Black'), local('MuliBlack'),
      url(${MuliBlack}) format('woff');
    font-weight: 300;
    font-style: normal;
  }

  body {
    background: ${lightTheme.colors.background};
    color: ${lightTheme.colors.textSecondary};
    font-family: "Muli Regular", Arial, Helvetica, sans-serif;
    margin: 0;
    padding: 0;
    transition: all 0.5s ease;
  }

  main {
    margin-right: auto;
    margin-left: auto;
  }

  h1, h2, h3, h4, h5, h6 {
    color: colors.textMain;
    font-family: "Muli Black", Arial, Helvetica, sans-serif;
    transition: all 0.5s ease;
    letter-spacing: 1px;
  }

  p {
    font-size: 0.9rem;
    line-height: 1.2;

    @media screen and (min-width: 768px) {
      font-size: 1.1rem;
      line-height: 1.5;
    }
  }

  h2 {
    font-size: 1rem;
    letter-spacing: 1.8px;
    text-transform: uppercase;

    @media screen and (min-width: 768px) {
      font-size: 1.5rem;
    }
  }

  h3 {
    font-size: 0.8rem;
    letter-spacing: 1.5px;
    margin: 30px 0 -15px 0;

    @media screen and (min-width: 768px) {
      font-size: 1.2rem;
    }
  }

  a {
    text-decoration: none;
  }
  a:hover {
   text-decoration: none; 
  }
  .chathead{
    background-image: linear-gradient(110.56deg, rgb(32, 128, 44) 0%, rgb(48, 191, 66) 100%);
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding: 2rem 2rem;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    .close {
      font-size: 3rem;
      color: ${colors.white};
      opacity: 60%;
      :hover {
        opacity: 100%;
      }
    }
    .modal-title {
      color: ${colors.white};
    }
    p {
      font-size: 0.8rem;
    }
  }
  .chat {
    border-radius: 15px;
    height: 500px;
  }
  .chatbox {
    border-radius: 15px;
    height: 550px;
  }
  .active-hide {
    display: none;
  }
`
