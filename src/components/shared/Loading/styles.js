import styled, { css } from "styled-components";
import { Box } from "src/components/shared/";

export const StyledSpinner = styled(Box).attrs((props) => ({
  width: "100%",
  height: "100%",
  justifyContent: "center",
  alignItems: "center",
  flex: 1,
}))`
  svg {
    #spiral_left {
      animation: loading-spinner 1.5s linear infinite;
      transform-origin: 11.3px 14.6px;
    }
    #spiral_right {
      animation: loading-spinner 1.5s linear infinite;
      transform-origin: 20.5px 14.6px;
    }
  }

  @keyframes loading-spinner {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export const StyledLazyLoad = styled("div").attrs((props) => ({}))`
  width: 100%;
  padding-bottom: ${(props) =>
    props.aspectRatio || "56.25%"}; // default to a 16:9 aspect ratio
  display: flex;
  position: relative;
  overflow: hidden;
`;

export const StyledWrapper = styled(Box).attrs((props) => ({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
}))`
  /* this is needed so Safari keeps sharp edges */
  @keyframes show {
    0% {
      opacity: 0.1;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes hide {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
  ${(props) =>
    props.show &&
    css`
      animation: show 500ms forwards;
    `}

  ${(props) =>
    !props.show &&
    css`
      animation: hide 500ms forwards;
    `}
`;

export const StyledPlaceholder = styled(Box).attrs((props) => ({
  width: "100%",
  height: "100%",
  position: "absolute",
  bg: "bg.secondary",
  top: 0,
}))``;
