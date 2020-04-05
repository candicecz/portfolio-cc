import React from "react";
import PropTypes from "prop-types";
import { StyledSocialLink } from "../styles";

const Component = (props) => {
  return <StyledSocialLink {...props}>{props.children}</StyledSocialLink>;
};

Component.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
};

Component.displayName = "SocialLink";

export default Component;
