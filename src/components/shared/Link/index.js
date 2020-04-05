import React from "react";
import PropTypes from "prop-types";
import NavigationLink from "./components/NavigationLink";
import OutlineLink from "./components/OutlineLink";
import SocialLink from "./components/SocialLink";
import DefaultLink from "./components/DefaultLink";

const Component = (props) => {
  const { variant } = props;

  if (variant === "navigation") {
    // Variant used in header.
    return <NavigationLink {...props} />;
  }
  if (variant === "outline") {
    // Variant with rectangle outline (used for external links).
    return <OutlineLink {...props} />;
  }
  if (variant === "social") {
    // Variant with circular outline (used for external social links).
    return <SocialLink {...props} />;
  }
  // Standard variant (used in footer links)
  return <DefaultLink {...props} />;
};

Component.propTypes = {
  variant: PropTypes.string,
};

Component.displayName = "Link";

export default Component;
