import React from "react";
import { projects_data } from "src/data";
import PageMain from "src/components/PageMain";
import { Thumbnail } from "src/components/Project";
import { Box } from "src/components/shared";
import { theme } from "src/theme";
import useMedia from "src/hooks/useMedia";
import * as R from "ramda";
import Loading from "src/components/Loading";

const Component = () => {
  // Determines the numbers of columns based on the current breakpoint
  const { breakpoints } = theme;
  const desktop_breakpoints = breakpoints.slice().reverse();
  const columns = useMedia(desktop_breakpoints, [4, 3, 3, 2, 1], 1);

  if (!projects_data) {
    return <Loading />;
  }
  const ordered_data = R.reverse(projects_data);
  return (
    <PageMain title="Projects">
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
    </PageMain>
  );
};

Component.displayName = "Projects";

export default Component;
