import styled from "styled-components";
import { Box, Layout, Text } from "src/components/shared";

export const StyledSection = styled(Box).attrs((props) => ({
  bg: props.bg || "bg.secondary",
  width: "100%",
  height: "100%",
  flex: 1,
  flexDirection: "column",
  position: "relative",
}))``;

export const StyledLayout = styled(Layout.Main).attrs((props) => ({
  height: "100%",
  flex: 1,
  flexDirection: "column",
  display: "flex",
  zIndex: 1,
}))``;

export const StyledTitle = styled(Text).attrs((props) => ({
  px: [0, 0, 1, 4],
  pt: [0, 0, 1, 4],
  pb: 4,
  variant: "title-xs",
  color: "text.primary",
}))``;

export const StyledSVG = styled("svg").attrs((props) => ({
  version: "1.1",
  id: "Layer_4_1_",
  xmlns: "http://www.w3.org/2000/svg",
  x: "0px",
  y: "0px",
  viewBox: "0 0 1369.8 318.4",
  preserveAspectRatio: "none",
}))`
  max-height: 100px;
`;
