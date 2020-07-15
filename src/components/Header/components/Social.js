import React from "react";
import PropTypes from "prop-types";
import { Box, Icon } from "src/components/shared";
import { StyledSocialLink } from "../styles";

const Component = () => {
  return (
    <Box width={"100%"} justifyContent={"space-between"} my={2}>
      <StyledSocialLink
        name="linkedin"
        href={"https://linkedin.com/in/candiceczech"}
        target={"_blank"}
        rel={"noreferrer"}
        mx={[0, 0, 1]}
        borderColor={"bg.default"}
      >
        <Icon
          title={"linkedin"}
          glyph={"linkedin"}
          fill={"#FFFFFF"}
          stroke="none"
        />
      </StyledSocialLink>
      <StyledSocialLink
        name="medium"
        href={"https://medium.com/@czech.candice"}
        target={"_blank"}
        rel={"noreferrer"}
        mx={[0, 0, 1]}
        borderColor={"bg.default"}
      >
        <Icon
          title={"medium"}
          glyph={"medium"}
          fill={"#FFFFFF"}
          stroke={"none"}
        />
      </StyledSocialLink>
      <StyledSocialLink
        name="github"
        href={"https://github.com/candicecz"}
        target={"_blank"}
        rel={"noreferrer"}
        mx={[0, 0, 1]}
        borderColor={"bg.default"}
      >
        <Icon
          title={"github"}
          glyph={"github"}
          stroke={"#FFFFFF"}
          fill={"#FFFFFF"}
        />
      </StyledSocialLink>
    </Box>
  );
};

Component.propTypes = {
  navigation: PropTypes.array,
  activeNavigationId: PropTypes.string,
};

Component.displayName = "Header";

export default Component;
