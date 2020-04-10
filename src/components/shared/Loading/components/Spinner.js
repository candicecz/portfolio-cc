import React from "react";
import PropTypes from "prop-types";
import { StyledSpinner } from "../styles";
import { Icon } from "src/components/shared";

const Component = ({ size, ...props }) => {
  return (
    <StyledSpinner {...props}>
      <Icon
        glyph={"cc-spinner"}
        fill={"bg.default"}
        stroke={"bg.primary"}
        strokeWidth={"0.5"}
        size={size || 5}
      />
    </StyledSpinner>
  );
};

Component.propTypes = {
  size: PropTypes.number,
};

Component.displayName = "LoadingSpinner";

export default Component;
