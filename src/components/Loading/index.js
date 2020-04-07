import React from "react";
import PropTypes from "prop-types";
import { StyledLoading } from "./styles";
import { Icon } from "src/components/shared";

const Component = ({ size, ...props }) => {
  return (
    <StyledLoading {...props}>
      <Icon
        glyph={"cc-spinner"}
        fill={"bg.default"}
        stroke={"bg.primary"}
        strokeWidth={"0.5"}
        size={size || 5}
      />
    </StyledLoading>
  );
};

Component.propTypes = {
  size: PropTypes.number
};

Component.displayName = "Loading";

export default Component;
