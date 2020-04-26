import styled from "styled-components";
import { Box, Layout, Link } from "src/components/shared";
import { position, layout, space } from "styled-system";

export const StyledHeader = styled(Layout.Main).attrs((props) => ({
  flexDirection: "column",
  py: 4,
  zIndex: 1000,
  bg: "bg.primary",
  maxWidth: "unset",
  minHeight: ["unset", "20rem", "20rem", "16rem"],
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

export const StyledWrapper = styled(Box).attrs((props) => ({
  justifyContent: "space-between",
  maxWidth: props.theme.breakpoints[4],
  flexDirection: ["column", "column", "column", "row"],
  width: "100%",
  p: [0, 4],
  py: [0, 7],
  margin: "0 auto",
  zIndex: 2000,
}))``;

export const StyledRow = styled(Box).attrs((props) => ({
  my: [2, 2, 2],
  alignItems: ["center", "center", "center", "flex-start"],
  justifyContent: ["center"],
  flexWrap: ["wrap", "wrap", "wrap", "nowrap"],
  ...props,
}))``;

export const StyledNavLink = styled(Link).attrs((props) => ({
  mx: [0, 0, 0, 2],
  alignItems: "center",
  flexWrap: ["wrap", "wrap", "wrap", "nowrap"],
  minWidth: "8rem",
  color: "text.reverse",
  mb: 2,
  variant: "navigation",
  ...props,
}))``;

export const StyledHeaderWave = styled(Box).attrs(() => ({
  width: "100%",
  height: "10rem",
  position: "relative",
  left: 0,
  bottom: "-1rem",
  zIndex: 0,
}))``;

export const StyledImg = styled("img").attrs((props) => ({
  width: "100%",
  height: ["2rem", "3rem", "4rem", "6rem"],
  position: "absolute",
  left: 0,
  bottom: "-2px",
  ...props,
}))`
  ${layout}
  ${position}
  ${space}
`;
