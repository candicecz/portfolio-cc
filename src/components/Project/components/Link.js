import React from "react";
import PropTypes from "prop-types";
import { Icon, Text } from "src/components/shared";
import { StyledLink, StyledText } from "../styles";

const Component = (props) => {
  const { variant } = props;
  if (variant === "outline") {
    return (
      <StyledLink {...props}>
        <StyledText color="text.primary">{props.children}</StyledText>
      </StyledLink>
    );
  }
  return (
    <StyledLink {...props}>
      {props.icon && (
        <Icon
          glyph={props.icon}
          title={props.title}
          mr={2}
          fill={"text.primary"}
          stroke={"text.primary"}
          size={1}
        />
      )}
      <Text
        variant={"title-xs"}
        color={"text.primary"}
        fontWeight={300}
        textTransform={"uppercase"}
      >
        {props.children}
      </Text>
    </StyledLink>
  );
};

Component.propTypes = {
  variant: PropTypes.string,
  icon: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
};

Component.displayName = "Link";

export default Component;
