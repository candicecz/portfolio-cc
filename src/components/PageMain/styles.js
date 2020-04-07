import styled from "styled-components";
import { Box, Layout } from "src/components/shared";

export const StyledWrapper = styled(Box).attrs((props) => ({
  bg: "bg.secondary",
  width: "100%",
  height: "100%",
  flex: 1,
  flexDirection: "column",
  position: "relative",
}))``;

export const StyledMain = styled(Layout.Main).attrs((props) => ({
  height: "100%",
  flex: 1,
  flexDirection: "column",
  display: "flex",
  zIndex: 1,
}))``;

export const StyledBody = styled(Box).attrs((props) => ({
  width: "100%",
  flexDirection: "column",
  overflow: "hidden",
  ...props,
}))``;

export const StyledBacksplash = styled(Box).attrs((props) => ({
  bg: "bg.default",
}))``;

export const StyledPattern = styled(Box).attrs((props) => ({
  width: "100%",
  height: "100%",
  position: "absolute",
  zIndex: 0,
}))`
  img {
    width: 100%;
  }
`;
