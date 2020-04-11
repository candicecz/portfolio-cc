import styled from "styled-components";
import { Box, Text } from "src/components/shared";

export const StyledAnimationWrapper = styled(Box).attrs(() => ({
  flex: 1,
  px: [7, 2, 7, 0],
  pb: 4,
  justifyContent: "center",
}))``;

export const StyledAbout = styled(Box).attrs(() => ({
  p: [0, 2],
  flex: 1,
  justifyContent: "center",
  flexDirection: "column",
}))``;

export const StyledText = styled(Text).attrs((props) => ({
  variant: "md",
  color: "text.secondary",
  pb: 4,
  ...props,
}))``;

export const StyledLoader = styled(Box).attrs(() => ({
  position: "relative",
  width: "100%",
  height: "100%",
}))`
  &::after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }
`;
