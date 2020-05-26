import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useTransition, animated } from "react-spring";
import { useLocation } from "react-router-dom";
import { StyledMain, StyledBody, StyledPattern, StyledWrapper } from "./styles";
import { Spinner } from "src/components/shared/";

// Sets the base layout for the pages.

const Component = (props) => {
  // const location = useLocation();
  // const transitions = useTransition(location, (location) => location.pathname, {
  //   from: { opacity: 0, transform: "translate(100%,0)" },
  //   enter: { opacity: 1, transform: "translate(0%,0)" },
  //   leave: { opacity: 1, transform: "translate(-100%,0)" },
  // });

  useEffect(() => {
    document.title = `Candice Czech - ${props.title}`;
  }, [props.title]);

  if (!props.children) {
    return <Spinner />;
  }

  const { children } = props;

  return (
    <StyledWrapper>
      <StyledMain>
        {/* {transitions.map(({ _, props: transition, key }) => {
          return (
            <animated.div
              key={key}
              style={{
                display: "flex",
                width: "100%",
                height: "100%",
                flex: 1,
                opacity: transition.opacity,
                transform: transition.transform,
              }}
            > */}
        <StyledBody {...props}>{children}</StyledBody>
        {/* </animated.div>
          );
        })} */}
      </StyledMain>
      <StyledPattern>
        <img
          src={require(`src/assets/pattern_body.png`)}
          alt={"Page background pattern."}
        />
      </StyledPattern>
    </StyledWrapper>
  );
};

Component.propTypes = {
  title: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.array]),
};

Component.displayName = "Main";

export default Component;
