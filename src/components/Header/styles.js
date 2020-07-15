import styled, { css } from "styled-components";
import { Box, Layout } from "src/components/shared";
import {
  border,
  color,
  flexbox,
  layout,
  position,
  space,
  typography,
} from "styled-system";

export const StyledHeader = styled(Layout.Main).attrs((props) => ({
  flexDirection: "column",
  py: 4,
  zIndex: 1000,
  maxWidth: "unset",
  minHeight: ["unset", "20rem", "20rem", "16rem"],
  bg: "bg.primary",
}))`
  &:after {
    content: "";
    position: absolute;
    background: linear-gradient(360deg, white -100%, transparent 94%);
    z-index: -1;
    width: 100%;
    height: 100%;
    left: 0;
    bottom: 0;
  }
`;

export const StyledRow = styled(Box).attrs((props) => ({
  my: [2, 2, 2],
  alignItems: ["center", "center", "center", "flex-start"],
  justifyContent: ["center"],
  flexWrap: ["wrap", "wrap", "wrap", "nowrap"],
  ...props,
}))``;

/*
=============================================================
| Toolbar
=============================================================
*/

export const StyledWrapper = styled(Box).attrs((props) => ({
  justifyContent: "space-between",
  maxWidth: props.theme.breakpoints[4],
  flexDirection: ["column", "column", "column", "row"],
  width: "100%",
  p: [0, 4],
  py: [0, 7],
  margin: "0 auto",
  zIndex: 2000,
}))`
  transition: height 0.2s ease-in-out;
`;

export const StyledToolbar = styled(Box).attrs((props) => ({
  width: "100%",
  height: props.isToolbar ? "3rem" : ["2rem", "3rem", "4rem", "6rem"],
  position: "absolute",
  left: 0,
  bottom: 0,
  ...props,
}))`
  ${layout}
  ${position}
  ${space}
  animation: animateWaveOut 500ms cubic-bezier(0.23, 1, 0.32, 1) forwards;
  transform-origin: bottom;


  ${(props) =>
    props.isToolbar &&
    css`
      animation: animateWaveIn 500ms cubic-bezier(0.23, 1, 0.32, 1) forwards;
      transform-origin: top;
      position: fixed;
      top: -1px;
      box-shadow: ${(props) => props.theme.shadows.sm};
      display: flex;
      align-items: center;
    `}
`;

export const StyledSVG = styled("svg").attrs((props) => ({
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 2989.1 204.8",
  x: "0px",
  y: "0px",
  "xml:space": "preserve",
  width: "100%",
  preserveAspectRatio: "none",
}))`
${layout}
${position}
${space}
  @keyframes animateWaveIn {
    0% {
      transform: scale(1, 0);
    }
    100% {
      transform: scale(1, 1);
    }
  }
  @keyframes animateWaveOut {
    0% {
      transform: scale(1, 0);
    }
    100% {
      transform: scale(1, 1);
    }
  }
  transform-origin: bottom;
  animation: animateWaveOut 500ms cubic-bezier(0.23, 1, 0.32, 1) forwards;
  transform-origin: bottom;

  ${(props) =>
    props.isToolbar === true &&
    css`
      animation: animateWaveIn 500ms cubic-bezier(0.23, 1, 0.32, 1) forwards;
      transform-origin: top;
      position: absolute;
      height: 100%;
      z-index: 1;
      top: 0;
      path {
        opacity: 1;
      }
    `}

`;

/*
=============================================================
| Navigation
=============================================================
*/

export const StyledNavigationRow = styled(StyledRow).attrs((props) => ({
  flexWrap: "wrap",
  justifyContent: ["space-evenly", "center", "center", "flex-end"],
}))`
  ${(props) =>
    props.isToolbar &&
    css`
      z-index: 1000;
      margin: 0 !important;
      height: 100%;
      align-items: center !important;
      margin-right: 1rem !important;
      ${Box} {
        justify-content: center;
      }
    `}
`;

export const StyledNavigationLink = styled("a").attrs((props) => ({
  mb: 2,
  mx: [0, 0, 0, 2],
  py: props.py || 1,
  color: props.color,
  bg: props.color,
  alignItems: "center",
  flexWrap: ["wrap", "wrap", "wrap", "nowrap"],
  ...props,
}))`
  ${space};
  ${layout};
  ${flexbox};
  ${color};
  ${typography};

  color: ${(props) => props.color};
  background: transparent;
  cursor: pointer;
  transition: all 0.1s linear;
  display: flex;
  flex-direction: column;
  position: relative;
  user-select: none;
  opacity: 0.65;
  transition: ${(props) => props.theme.transitions.hover.off};

  &:before,
  &:after {
    ${color};
    content: " ";
    height: 0.15rem;
    width: 50%;
    transition: ${(props) => props.theme.transitions.hover.off};
    background: ${(props) => props.color};
    position: absolute;
    bottom: 0;
  }
  &:before {
    left: 10%;
    transform: translate(0rem, -0.2rem);
  }

  &:after {
    right: 10%;
    transform: translate(0, 0.1rem);
  }

  &:hover {
    ${(props) =>
      !props.selected &&
      css`
        *,
        &:before,
        &:after {
          transition: ${(props) => props.theme.transitions.hover.on};
        }
        * {
          letter-spacing: 0.15rrem;
        }
        &:before {
          width: 60%;
          left: 0;
          transform: translate(0rem, -0.2rem);
        }
        &:after {
          width: 60%;
          right: 0;
          transform: translate(0, 0.1rem);
        }
      `}
  }
  ${(props) =>
    props.selected &&
    css`
      &:before,
      &:after {
        height: 0.1rem;
      }
    `}

  ${(props) =>
    props.selected &&
    css`
      opacity: 1;

      transition: ${(props) => props.theme.transitions.hover.on};
      &:before {
        content: " ";
        left: 0;
        transform: translate(50%, 0.05rem);
      }

      &:after {
        content: " ";
        left: 0;
        transform: translate(50%, 0rem);
      }
    `}
`;

/*
=============================================================
| Social
=============================================================
*/

export const StyledSocialLink = styled("a").attrs((props) => ({
  href: props.href,
}))`
${space};
${flexbox};
${layout};
${border};
cursor: pointer;
  border: 2px solid;
  border-color: transparent;
  border-radius: 50%;
  transition: ${(props) => props.theme.transitions.hover.off};
  padding: ${(props) => props.theme.space[1]};

  &:hover {
    ${border};
    border-color: ${(props) => props.borderColor}
    transition: ${(props) => props.theme.transitions.hover.on};
  }
`;
