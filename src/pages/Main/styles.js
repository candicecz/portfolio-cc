import styled from "styled-components";
import { Box } from "src/components/shared";

export const StyledSection = styled(Box).attrs((props) => ({
  bg: props.bg || "bg.secondary",
  width: "100%",
  height: "100%",
  flex: 1,
  flexDirection: "column",
  position: "relative",
}))``;
