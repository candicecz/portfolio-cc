import React from "react";
import PropTypes from "prop-types";
import { StyledNavigationLink } from "../styles";
import { Box, Text } from "src/components/shared/";

const Component = (props) => {
  return (
    <Box zIndex={100} {...props}>
      <StyledNavigationLink
        exact
        activeClassName="selected"
        to={props.to}
        color={props.color}
      >
        <Text
          variant="title-xs"
          color={props.color}
          fontWeight={700}
          letterSpacing={"0.25rem"}
        >
          {props.children}
        </Text>
      </StyledNavigationLink>
    </Box>
  );
};

Component.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  color: PropTypes.string,
  to: PropTypes.string,
};

Component.displayName = "NavigationLink";

export default Component;
