import React from "react";
import PropTypes from "prop-types";
import Pattern from "./components/Pattern";
import { StyledLayout, StyledTitle } from "./styles";
import { Box } from "src/components/shared";

const Component = ({
  children,
  sectionTitle,
  patternTop,
  patternBottom,
  ...props
}) => {
  return (
    <React.Fragment>
      {patternTop && <Pattern transform={"scale(-1,-1)"} />}
      <Box bg={"bg.default"} {...props}>
        <StyledLayout flexDirection={"column"}>
          {sectionTitle && <StyledTitle>{sectionTitle}</StyledTitle>}
          {children}
        </StyledLayout>
      </Box>
      {patternBottom && <Pattern transform={"scale(1,1)"} />}
    </React.Fragment>
  );
};

Component.propTypes = {
  backgroundImage: PropTypes.string,
  children: PropTypes.object.isRequired,
  sectionTitle: PropTypes.string,
  index: PropTypes.number,
  patternTop: PropTypes.bool,
  patternBottom: PropTypes.bool,
};

Component.displayName = "Section";

export default Component;
