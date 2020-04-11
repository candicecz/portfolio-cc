import React from "react";
import PropTypes from "prop-types";
import { StyledList, StyledSection, StyledText } from "../styles";
import { Box, Layout, Link, Spinner, Text } from "src/components/shared";
import { Slug } from "src/components/shared";

const Component = ({ delay, project }) => {
  if (!project) {
    return <Spinner />;
  }
  return (
    <StyledSection bg="bg.default" py={4}>
      <Layout.Main py={0}>
        <Slug delay={delay}>
          <Link to="/projects" icon="caret-left" px={0} py={4}>
            Back to Projects
          </Link>
          <Box flexDirection="column">
            <Box flexDirection="column" py={4}>
              <Box justifyContent="space-between" width="100%">
                <Text flex={1} variant={"title-md"}>
                  {project.name}
                </Text>
              </Box>
              <StyledText variant="xs">{project.tools}</StyledText>
            </Box>
            <Box flexDirection={["column", "column", "row"]}>
              <Box py={[0, 0, 2]} flex={2} flexDirection={"column"}>
                <Text variant="md" color={"text.secondary"} pr={4} pb={4}>
                  {project.description}
                </Text>
                {project.websiteURI && (
                  <Box flex={1} alignItems={"center"} mt={2} mb={[4, 4, 2]}>
                    <Link
                      target={"_blank"}
                      to={project.websiteURI}
                      mt={0}
                      variant="outline"
                    >
                      <StyledText color="text.primary">
                        Visit Website
                      </StyledText>
                    </Link>
                  </Box>
                )}
              </Box>
              <Box
                flex={1}
                justifyContent={"center"}
                alignItems={["flex-start", "flex-start", "flex-end"]}
                flexDirection={"column"}
                py={2}
              >
                <StyledList>
                  {project.categories &&
                    project.categories.map((category) => (
                      <li key={category}>
                        <StyledText variant="xs" pb={1}>
                          {category}
                        </StyledText>
                      </li>
                    ))}
                </StyledList>
              </Box>
            </Box>
          </Box>
        </Slug>
      </Layout.Main>
    </StyledSection>
  );
};

Component.propTypes = {
  project: PropTypes.object,
  isActive: PropTypes.bool,
  delay: PropTypes.number,
};

Component.displayName = "ProjectDetails";

export default Component;
