import React from "react";
import PropTypes from "prop-types";
import { StyledDefaultLink } from "../styles";
import { Icon, Text } from "src/components/shared/";

const Component = (props) => {
  return (
    <StyledDefaultLink {...props}>
      {props.icon && (
        <Icon glyph={props.icon} mr={2} stroke={"text.primary"} size={1} />
      )}
      <Text
        variant={"title-xs"}
        color={"text.primary"}
        fontWeight={300}
        textTransform={"uppercase"}
      >
        {props.children}
      </Text>
    </StyledDefaultLink>
  );
};

Component.propTypes = {
  icon: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
};

Component.displayName = "DefaultLink";

export default Component;
