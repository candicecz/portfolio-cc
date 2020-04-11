import React from "react";
import { StyledFooter, StyledArrow } from "../styles";
import { Box, Icon, Link, Layout } from "src/components/shared";

const Component = () => {
  return (
    <StyledFooter>
      <Layout.Main display={"flex"}>
        <StyledArrow onClick={() => window.scrollTo(0, 0)} />
        <Box flexDirection="column" ml={2}>
          <Link to="/projects" pb={1}>
            Projects
          </Link>
          <Link to="/about" pb={1}>
            About
          </Link>
        </Box>
      </Layout.Main>
      <Icon
        glyph={"cc-logo"}
        fill={"bg.wash"}
        stroke={"bg.primary"}
        size={2}
        m={4}
        position={"absolute"}
        bottom={0}
        right={0}
        opacity={0.5}
      />
    </StyledFooter>
  );
};

Component.displayName = "ProjectFooter";

export default Component;
