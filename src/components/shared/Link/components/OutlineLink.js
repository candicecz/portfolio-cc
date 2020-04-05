import React from "react";
import PropTypes from "prop-types";
import { StyledOutlineLink } from "../styles";
import { Text } from "src/components/shared/";

const Component = (props) => {
  return (
    <StyledOutlineLink {...props}>
      <Text variant={"title-xs"}>{props.children}</Text>
    </StyledOutlineLink>
  );
};

Component.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
};

Component.displayName = "OutlineLink";

export default Component;
