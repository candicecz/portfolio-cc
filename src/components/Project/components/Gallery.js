import React from "react";
import PropTypes from "prop-types";
import { StyledSection, StyledText } from "../styles";
import { Box, Layout } from "src/components/shared";
import { Slug } from "src/components/shared";

const Component = ({ children, color, delay, sections }) => {
  if (!sections) {
    return null;
  }

  return (
    <React.Fragment>
      {sections.map((section, i) => (
        <StyledSection key={i} index={i} bg={color}>
          <Layout.Main py={4}>
            <Slug delay={delay}>
              <Box>
                {section.title && (
                  <StyledText pb={4} color={color}>
                    {section.title}
                  </StyledText>
                )}
              </Box>
              <Box
                flexDirection={["column", "column", "row", "row"]}
                justifyContent={"space-around"}
                flexWrap={"wrap"}
                width={"100%"}
              >
                {section.assets &&
                  section.assets.map((asset) =>
                    children({
                      asset,
                      styles: section.styles || {},
                      id: asset.main.src,
                      key: asset.main.src,
                    })
                  )}
              </Box>
            </Slug>
          </Layout.Main>
        </StyledSection>
      ))}
    </React.Fragment>
  );
};

Component.propTypes = {
  children: PropTypes.func,
  color: PropTypes.string,
  delay: PropTypes.number,
  sections: PropTypes.array,
};

Component.displayName = "ProjectGallery";

export default Component;
