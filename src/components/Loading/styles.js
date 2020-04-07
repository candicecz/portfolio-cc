import styled from "styled-components";
import { Box } from "src/components/shared";

export const StyledLoading = styled(Box).attrs((props) => ({
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
