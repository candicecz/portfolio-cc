import React from "react";
import About from "./About";
import Projects from "./Projects";
import { Box } from "src/components/shared";

const Component = () => {
  return (
    <Box flexDirection={"column"}>
      <About />
      <Projects />
    </Box>
  );
};

Component.displayName = "Pages";
export default Component;
