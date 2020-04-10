import React from "react";
import PropTypes from "prop-types";
import { useTransition } from "react-spring";
import { StyledAnimated } from "../styles";

const Component = ({
  from = { opacity: 0 },
  enter = { opacity: 1 },
  leave = { opacity: 0 },
  update,
  show,
  delay = 0,
  children
}) => {
  const transitions = useTransition(show, null, {
    from,
    enter,
    leave,
    update,
    trail: delay
  });

  return transitions.map(
    ({ item, key, props: transitionProps, ...rest }, i) => {
      return (
        item && (
          <StyledAnimated
            key={key}
            style={{
              ...children.props.style,
              ...transitionProps,
              willChange: "opacity"
            }}
          >
            {children}
          </StyledAnimated>
        )
      );
    }
  );
};

Component.propTypes = {
  show: PropTypes.bool,
  from: PropTypes.object,
  enter: PropTypes.object,
  leave: PropTypes.object,
  delay: PropTypes.number
};

Component.displayName = "Fade";

export default Component;
