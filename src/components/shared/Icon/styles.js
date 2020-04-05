import styled from "styled-components";
import { Box } from "src/components/shared";

export const SvgWrapper = styled(Box).attrs(props => ({
  minWidth: `${props.size}rem`,
  width: `${props.size}rem`,
  height: `${props.size}rem`,
  position: props.position || "relative"
}))`
  transition: ${props => props.theme.transitions.hover.off}

  &:hover {
    transition: ${props => props.theme.transitions.hover.on}
  }
  ${InlineSvg} {
    fill: ${props => props.fill};
    stroke: ${props => props.stroke};
    stroke-width: ${props => props.strokeWidth};
  }
`;

export const InlineSvg = styled.svg.attrs(props => ({
  fillRule: "evenodd",
  clipRule: "evenodd",
  strokeLinejoin: "round",
  strokeMiterlimit: "1.414",
  xmlns: "http://www.w3.org/2000/svg",
  "aria-labelledby": "title",
  viewBox: "0 0 32 32",
  preserveAspectRatio: "xMidYMid meet",
  fit: true,
  id: props.glyph
}))`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
`;
