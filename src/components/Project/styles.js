import styled, { css } from "styled-components";
import { Link as RouterLink } from "react-router-dom";
import { Box, Icon, Link, Text } from "src/components/shared";
import { color, space } from "styled-system";

/*
=============================================================
| Thumbnail
=============================================================
*/

const MARGIN = 1;

export const StyledThumbnailWrapper = styled(Box).attrs((props) => ({
  mr: props.i % props.columns === props.columns - 1 ? 0 : MARGIN + "rem",
  mb: MARGIN + "rem",
  width: `calc((100% - ${MARGIN * (props.columns - 1) + "rem"}) / ${
    props.columns
  })`,
}))`
  ${(props) => props.theme.transitions.hover.on}
`;

export const StyledThumbnail = styled(Box).attrs((props) => ({
  position: "relative",
  alignItems: "center",
  justifyContent: "center",
  color: "text.default",
  boxShadow: "sm",
}))`
  overflow: hidden;
  transition: ${(props) => props.theme.transitions.hover.off};
  cursor: pointer

  &:hover {
    box-shadow: ${(props) => props.theme.shadows.md};
    transition: ${(props) => props.theme.transitions.hover.on};
  }
`;

export const StyledThumbnailOverlay = styled(RouterLink).attrs((props) => ({}))`
  width: 100%;
  height: 100%;
  padding: ${(props) => props.theme.space[2]};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;


  &:before {
    content: "";
    background-color: ${(props) => props.theme.colors.bg.reverse};
    opacity:  0.6;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }

  @media screen and (min-width: ${(props) => props.theme.breakpoints[1]}) {
    height: 100%;
    &::before {
        background-color: transparent;
    }
    * {
      transition: top 0.2s linear, transform 0.2s linear;

      &:first-child {
        position: absolute;
        opacity: 0;
        top: 0;
        left: 0
        transform: translate(0, -200%);
      }
      &:last-child {
        position: absolute;
        opacity: 0;
        bottom: 0;
        left: 0

        transform: translate(0, 200%);
      }
    }

    &:hover {
      background-color: ${(props) => props.theme.colors.bg.reverse};
      * {
        transition: top 0.2s linear, transform 0.2s linear;

        &:first-child,
        &:last-child {
          opacity: 1;
          position: unset;
          top: auto;
          transform: translate(0, 0);
        }
      }
    }
  }
  @media screen and (min-width: ${(props) => props.theme.breakpoints[1]}) {
    padding: ${(props) => props.theme.space[3]};
  }
`;

export const StyledOutlineButton = styled(Link).attrs((props) => ({
  display: "flex",
  alignItems: "center",
  border: "2px solid",
  borderColor: "bg.reverse",
  p: 2,
  py: 1,
  mt: 4,
  ...props,
}))`
  opacity: 0.5;
  transition: ${(props) => props.theme.transitions.hover.off};
  ${Text} {
    text-transform: uppercase;
    display: flex;
    align-items: center;
  }
  &:hover {
    opacity: 1;
    transition: ${(props) => props.theme.transitions.hover.on};
  }
`;

export const StyledText = styled(Text).attrs((props) => ({
  variant: props.variant || "title-xs",
  color: props.color || "text.primary",
}))`
  font-weight: 300;
  text-transform: uppercase;
  letter-spacing: 0.9px;
`;

export const StyledList = styled("ul").attrs((props) => ({
  pl: [0, 0, 4],
}))`
  ${space}
  list-style: none;
  margin: 0;
  flex: 1;
`;

/*
=============================================================
| Details
=============================================================
*/

export const StyledSection = styled(Box).attrs((props) => ({
  display: "block",
  position: "relative",
  bg: props.index % 2 === 0 ? props.bg || "bg.primary" : "bg.default",
}))`
  background-color: transparent;

  &:before {
    ${color}
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    opacity: 0.1;
    background: linear-gradient(
      180deg,
      transparent -20%,
      ${(props) => props.bg} 100%
    );
  }
`;

/*
=============================================================
| Asset
=============================================================
*/

export const StyledAssetWrapper = styled(Box).attrs((props) => ({
  flex: ["unset", "unset", "unset", "1 1 30%"],
  boxShadow: "sm",
  my: 2,
  mr: ["unset", "unset", "unset", 2],
  width: ["100%", "100%", "100%", "auto"],
  maxWidth: ["auto", "auto", "auto", "75%"],
  display: "block",
  ...props.styles,
  ...props,
}))`
  align-self: center;
  &:last-child {
    margin-right: 0;
  }
  ${(props) =>
    props.isModalOpen &&
    css`
      position: absolute;
      width: 100% !important;
      max-width: unset !important;
      padding: 1rem;
      @media screen and (min-width: ${(props) => props.theme.breakpoints[2]}) {
        padding: 5%;
      }
      @media screen and (min-width: ${(props) => props.theme.breakpoints[3]}) {
        padding: 10%;
      }
    `};
`;

export const StyledPicture = styled("picture").attrs((props) => ({}))`
  width: 100%;
  height: 100%;
`;

export const StyledVideo = styled("video").attrs((props) => ({
  autoPlay: true,
  loop: true,
  muted: true,
  playsInline: true, // needed for iOS autoplay
}))`
  width: 100%;
  box-shadow: ${(props) => props.theme.shadows.sm};
`;

/*
=============================================================
| Footer
=============================================================
*/

export const StyledFooter = styled(Box).attrs(() => ({
  display: "block",
  position: "relative",
}))`
  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    background: ${(props) => props.theme.colors.bg.wash};
  }
`;

export const StyledArrow = styled(Icon).attrs(() => ({
  glyph: "caret-up",
  stroke: "text.primary",
  fill: "text.primary",
  size: 1,
}))`
  cursor: pointer;
  transition: ${(props) => props.theme.transitions.hover.off};
  &:hover {
    opacity: 0.5;
    transition: ${(props) => props.theme.transitions.hover.on};
  }
`;
