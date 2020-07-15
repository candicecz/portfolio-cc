import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

export const GlobalStyle = createGlobalStyle`
  ${normalize}

  html {
    font-size: 16px;
    font-family: Heebo;
    width: 100%;
    overflow-x: hidden;
    min-width: 17.5rem;
    min-height: 100vh;

  }

  html, body {
    width: 100%;
    margin:0;
    padding:0;
    box-sizing: border-box;
    position: relative;
    display:flex;
    flex-direction:column;
    flex: 1;
    overflow-x: hidden;
  }

  #root {
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  * {
    box-sizing: border-box;
  }

  .preload, .preload * {
    animation-duration: 0s !important;
    -webkit-animation-duration: 0s !important;
  }

  a {
    color: inherit; /* blue colors for links too */
    text-decoration: inherit; /* no underline */
  }

  img:-moz-loading {
    visibility: hidden;
  }
`;

export const theme = {
  breakpoints: ["20rem", "30rem", "48rem", "64rem", "80rem"],
  colors: {
    bg: {
      default: "#FFFFFF",
      reverse: "#000000",
      primary: "#371C7D",
      secondary: "#E2DEEC",
      wash: "#F5F5F9",
    },
    text: {
      default: "#000000",
      primary: "#5F64A8",
      secondary: "#575361",
      reverse: "#FFFFFF",
    },
  },
  space: [
    "0rem",
    "0.25rem",
    "0.5rem",
    "0.75rem",
    "1rem", // = 16px
    "1.25rem",
    "1.5rem",
    "2rem",
    "2.5rem",
    "3rem",
    "4rem",
    "5rem",
    "6rem",
    "8rem",
  ],

  text: {
    "title-xxs": {
      fontFamily: "system-ui, sans-serif",
      fontWeight: 800,
      textTransform: "uppercase",
      fontSize: "0.75rem",
      lineHeight: "1.5rem",
      letterSpacing: "0.15rem",
    },
    "title-xs": {
      fontFamily: "system-ui, sans-serif",
      fontWeight: 800,
      textTransform: "uppercase",
      fontSize: "0.875rem",
      lineHeight: "1.5rem",
      letterSpacing: "0.15rem",
    },
    "title-sm": {
      fontFamily: "system-ui, sans-serif",
      fontWeight: 800,
      textTransform: "uppercase",
      fontSize: "1rem",
      lineHeight: "1.5rem",
      letterSpacing: "0.2rem",
    },
    "title-md": {
      fontFamily: "system-ui, sans-serif",
      fontWeight: 800,
      textTransform: "uppercase",
      fontSize: "1.25rem",
      lineHeight: "1.5rem",
      letterSpacing: "0.09rem",
    },
    "title-lg": {
      fontFamily: "system-ui, sans-serif",
      fontWeight: 800,
      textTransform: "uppercase",
      fontSize: "1.5rem",
      lineHeight: "1.5rem",
    },
    "title-xl": {
      fontFamily: "system-ui, sans-serif",
      fontWeight: 800,
      textTransform: "uppercase",
      lineHeight: "1.5rem",
      fontSize: "2rem",
    },
    xs: {
      fontFamily: "system-ui, sans-serif",
      fontWeight: 400,
      fontSize: "0.75rem",
      lineHeight: "1.25rem",
    },
    sm: {
      fontFamily: "system-ui, sans-serif",
      fontWeight: 400,
      fontSize: "0.875rem",
      lineHeight: "1.5rem",
    },
    md: {
      fontFamily: "system-ui, sans-serif",
      fontWeight: 400,
      fontSize: "1rem",
      lineHeight: "1.5rem",
      letterSpacing: "0.02em",
    },
    lg: {
      fontFamily: "system-ui, sans-serif",
      fontWeight: 400,
      fontSize: "1.25rem",
      lineHeight: "1.5rem",
    },
    xl: {
      fontFamily: "system-ui, sans-serif",
      fontWeight: 400,
      fontSize: "1.5rem",
      lineHeight: "1.5rem",
    },
  },
  shadows: {
    sm: "0px 1px 7px 0px rgba(0,0,0,0.12)",
    md: "0px 1px 7px 2px rgba(0,0,0,0.24)",
  },
  transitions: {
    hover: {
      on: "all 0.2s ease-in",
      off: "all 0.2s ease-out",
    },
  },
};
