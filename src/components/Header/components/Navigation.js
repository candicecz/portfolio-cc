import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import PropTypes from "prop-types";
import { StyledNavigationLink, StyledNavigationRow } from "../styles";
import { Box, Text } from "src/components/shared/";

const NavigationLink = (props) => {
  return (
    <Box zIndex={100} mx={2} width={"6rem"} {...props}>
      <StyledNavigationLink
        href={props.href}
        color={props.color}
        selected={props.selected}
      >
        <Text
          variant="title-xxs"
          color={props.color}
          fontWeight={700}
          letterSpacing={"0.15rem"}
        >
          {props.children}
        </Text>
      </StyledNavigationLink>
    </Box>
  );
};

const Component = ({ sections, setActiveSection, isToolbar, ...rest }) => {
  const [selected, setSelected] = useState(null);
  const location = useLocation();
  useEffect(() => {
    const location_hash = location.hash;
    setSelected((prev) => {
      if (location_hash) {
        return location_hash.slice(1);
      }
      return prev;
    });
  }, [location]);

  return (
    <StyledNavigationRow flex={1} {...rest}>
      {sections.map((s) => {
        return (
          <NavigationLink
            key={s.id}
            href={`/#${s.id}`}
            isToolbar={isToolbar}
            selected={isToolbar && selected === s.id}
            onClick={() => setActiveSection({ ratio: 0, id: s.id })}
            justifyContent={["center", "flex-start"]}
            color={isToolbar ? "text.primary" : "text.reverse"}
            ariaLabel={`Links to ${s.id} section`}
          >
            {s.title}
          </NavigationLink>
        );
      })}
    </StyledNavigationRow>
  );
};

NavigationLink.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  color: PropTypes.string,
  href: PropTypes.string,
  selected: PropTypes.bool,
  setActiveSection: PropTypes.func,
};

Component.propTypes = {
  isToolbar: PropTypes.bool,
  sections: PropTypes.array.isRequired,
  setActiveSection: PropTypes.func,
};

Component.displayName = "NavigationLink";

export default Component;
