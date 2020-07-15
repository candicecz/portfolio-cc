import React from "react";
import PropTypes from "prop-types";
import { useTrail, animated } from "react-spring";

const Component = ({
  delay,
  children,
  from = {
    opacity: 0,
    transform: "translate3d(0,60px,0)",
  },
  to = { opacity: 1, transform: "translate3d(0,0px,0)" },
  ...rest
}) => {
  const trail = useTrail(children.length || 1, { from, to, delay });
  return trail.map((props, i) => {
    return (
      <animated.div key={i} style={{ ...props }} {...rest}>
        {children[i] || children}
      </animated.div>
    );
  });
};

Component.propTypes = {
  delay: PropTypes.number,
  from: PropTypes.object,
  to: PropTypes.object,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.array]),
};
Component.displayName = "Slug";

export default Component;
