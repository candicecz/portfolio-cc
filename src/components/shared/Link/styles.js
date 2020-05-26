import styled from "styled-components";
import { HashLink } from "react-router-hash-link";
import { NavLink } from "react-router-dom";
import {
  border,
  space,
  color,
  flexbox,
  typography,
  layout,
} from "styled-system";
import { Text } from "src/components/shared/";

export const StyledNavigationLink = styled(HashLink).attrs((props) => ({
  mb: 2,
  py: props.py || 1,
  color: props.color,
  bg: props.color,
}))`
  ${space};
  ${color};
  ${typography};

  color: ${(props) => props.color};
  background: transparent;
  cursor: pointer;
  transition: all 0.1s linear;
  display: flex;
  flex-direction: column;
  position: relative;
  user-select: none;
  opacity: 0.65;
  transition: ${(props) => props.theme.transitions.hover.off};

  &:before {
    ${color};
    content: " ";
    width: 50%;
    height: 0.15rem;
    position: absolute;
    bottom: 0;
    transform: translate(0rem, -0.15rem);
    background: ${(props) => props.color};
    transition: ${(props) => props.theme.transitions.hover.off};
  }

  &:after {
    ${color};
    content: " ";
    width: 50%;
    height: 0.15rem;
    background: ${(props) => props.color};
    position: absolute;
    bottom: 0;
    left: 0;
    transform: translate(100%, 0.25rem);
    transition: ${(props) => props.theme.transitions.hover.off};
  }

  &:hover:not(.${(props) => props.activeClassName}) {
    * {
      letter-spacing: 0.3rem;
      transition: ${(props) => props.theme.transitions.hover.on};
    }
    &:before {
      transform: translate(0rem, -0.15rem) scale(1.2);
      transition: ${(props) => props.theme.transitions.hover.on};
    }

    &:after {
      transform: translate(100%, 0.25rem) scale(1.2);
      transition: ${(props) => props.theme.transitions.hover.on};
    }
  }

  &.${(props) => props.activeClassName} {
    opacity: 1;

    transition: ${(props) => props.theme.transitions.hover.on};
    &:before {
      content: " ";
      left: 0;
      transform: translate(50%, 0.05rem);
    }

    &:after {
      content: " ";
      left: 0;
      transform: translate(50%, 0rem);
    }
  }
`;

export const StyledLink = styled.a.attrs((props) => ({
  href: props.to,
}))`
  ${space};
  ${flexbox};
  ${layout};
  ${border};
  cursor: pointer;
`;

export const StyledDefaultLink = styled(NavLink).attrs((props) => ({
  px: 2,
  pb: 4,
  ...props,
}))`
  ${space};
  ${flexbox};
  ${layout};
  ${border};
  cursor: pointer;
  display: flex;
  cursor: pointer;
  align-items: center;
  ${Text} {
    text-transform: uppercase;
    transition: ${(props) => props.theme.transitions.hover.off};
    font-weight: 600;
    letter-spacing: 0.9px;
  }
  &:hover {
    > * {
      opacity: 0.5;
      letter-spacing: 0.1rem;
      transition: ${(props) => props.theme.transitions.hover.on};
    }
  }
`;

export const StyledSocialLink = styled(StyledLink).attrs(() => ({}))`
  border: 2px solid;
  border-color: transparent;
  border-radius: 50%;
  transition: ${(props) => props.theme.transitions.hover.off};
  padding: ${(props) => props.theme.space[1]};

  &:hover {
    ${border};
    border-color: ${(props) => props.borderColor}
    transition: ${(props) => props.theme.transitions.hover.on};
  }
`;

export const StyledOutlineLink = styled(StyledLink).attrs((props) => ({
  py: 2,
  px: 3,
  ...props,
}))`
  border: 1px solid #e4e0ed;
  border-radius: 2px;
  margin-top: 0rem;
  ${Text} {
    text-transform: uppercase;
    transition: ${(props) => props.theme.transitions.hover.off};
    font-weight: 600;
  }
  &:hover {
    ${Text} {
      opacity: 0.5;
      letter-spacing: 0.1rem;
      transition: ${(props) => props.theme.transitions.hover.on};
    }
  }
`;
