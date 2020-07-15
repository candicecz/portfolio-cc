import React from "react";
import { projects_data } from "src/data";
import { Thumbnail } from "src/components/Project";
import { Box } from "src/components/shared";
import { theme } from "src/theme";
import useMedia from "src/hooks/useMedia";
import * as R from "ramda";
import { Spinner } from "src/components/shared/";
import { Slug } from "src/components/shared";
import SectionWrapper from "src/components/SectionWrapper";

const Component = () => {
  // Determines the numbers of columns based on the current breakpoint
  const { breakpoints } = theme;
  const breakpoints_list = breakpoints.slice().reverse();
  const columns = useMedia(breakpoints_list, [4, 3, 3, 2, 1], 1);

  if (!projects_data) {
    return <Spinner />;
  }
  const ordered_data = R.reverse(projects_data);

  return (
    <SectionWrapper sectionTitle={"Projects"} patternTop={true}>
      <Slug delay={300}>
        <Box flexWrap={"wrap"} p={[0, 0, 1, 4]}>
          {ordered_data.map((project, i) => {
            return (
              <Thumbnail
                key={project.id}
                i={i}
                project={project}
                columns={columns}
              />
            );
          })}
        </Box>
      </Slug>
    </SectionWrapper>
  );
};

Component.displayName = "Projects";

export default Component;
