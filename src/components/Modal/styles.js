import styled from "styled-components";
import { Box } from "src/components/shared";

export const StyledModal = styled(Box).attrs((props) => ({}))`
  position: fixed;
  z-index: 2000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(255, 255, 255);
  background-color: rgba(255, 255, 255, 0.9);
`;

export const StyledContent = styled(Box).attrs((props) => ({
  margin: "auto",
  display: "block",
  width: ["100%", "100%", "85%"],
  maxWidth: ["100%", "100%", "85%"],
  py: 9,
}))`
  animation-name: modalTransition;
  animation-duration: 0.6s;

  @keyframes modalTransition {
    from {
      transform: scale(0);
    }
    to {
      transform: scale(1);
    }
  }
  @media screen and (min-width: ${(props) => props.theme.breakpoints[2]}) {
    padding: 2rem;
  }
`;

export const StyledClose = styled(Box).attrs((props) => ({}))`
  position: absolute;
  top: 1rem;
  right: 1rem;

  cursor: pointer;
  transition: 0.3s;
  opacity: 1;
  &:hover {
    opacity: 0.75;
  }
`;

export const StyledBackdrop = styled(Box).attrs((props) => ({
  position: "fixed",
  zIndex: -1,
  top: 0,
  width: "100%",
  height: "100%",
}))``;
