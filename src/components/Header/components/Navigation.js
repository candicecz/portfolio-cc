import React from "react";
import PropTypes from "prop-types";
import { StyledNavigationLink, StyledNavigationRow } from "../styles";
import { Box, Text } from "src/components/shared/";

const NavigationLink = (props) => {
  return (
    <Box zIndex={100} mx={2} width={"6rem"} {...props}>
      <StyledNavigationLink
        href={props.href}
        color={props.color}
        selected={props.selected}
      >
        <Text
          variant="title-xxs"
          color={props.color}
          fontWeight={700}
          letterSpacing={"0.15rem"}
        >
          {props.children}
        </Text>
      </StyledNavigationLink>
    </Box>
  );
};

const Component = ({ sections, activeSectionId, isToolbar, ...rest }) => {
  return (
    <StyledNavigationRow flex={1} {...rest}>
      {sections.map((n) => {
        return (
          <NavigationLink
            key={n.id}
            href={`/#${n.id}`}
            isToolbar={isToolbar}
            selected={
              (isToolbar && activeSectionId && activeSectionId === n.id) ||
              false
            }
            justifyContent={["center", "flex-start"]}
            color={isToolbar ? "text.primary" : "text.reverse"}
          >
            {n.title}
          </NavigationLink>
        );
      })}
    </StyledNavigationRow>
  );
};

NavigationLink.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  color: PropTypes.string,
  href: PropTypes.string,
  selected: PropTypes.bool,
  setActiveSection: PropTypes.func,
};

Component.propTypes = {
  isToolbar: PropTypes.bool,
  sections: PropTypes.array.isRequired,
  activeSectionId: PropTypes.string,
  setActiveSection: PropTypes.func,
};

Component.displayName = "NavigationLink";

export default Component;
