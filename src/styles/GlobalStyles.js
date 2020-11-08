import { createGlobalStyle } from "styled-components"
import MuliRegular from "../fonts/Muli-Regular.woff"
import MuliBlack from "../fonts/Muli-Black.woff"

export const colors = {
  white: "#fff",
  darkGrey: "#1a1c20",
  deepDarkGrey: "#404040",
  blueShade1: "#215973",
  blueShade2: "#6fadc6",
  blueShade3: "#d1e1e9",
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
`
