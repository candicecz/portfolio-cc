import React, { useRef, useEffect, useState } from "react";
import lottie from "lottie-web";
import animationData from "src/assets/cc-animation.json";
import Main from "src/components/Main";
import {
  StyledText,
  StyledAnimationWrapper,
  StyledAbout,
  StyledLoader,
} from "./styles";
import { Box, Spinner } from "src/components/shared";

const Component = () => {
  const animationEl = useRef(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: animationEl.current,
      renderer: "svg",
      autoplay: true,
      animationData: animationData,
      rendererSettings: { preserveAspectRatio: "xMidYMid slice" },
    });

    setIsLoading(!anim.isLoaded);

    anim.addEventListener("complete", function () {
      setTimeout(() => {
        anim.goToAndPlay(0);
      }, 3000);
    });
    return () => anim.destroy();
  }, []);

  return (
    <Main title="About">
      <Box flexDirection={["column", "column", "column", "row"]}>
        <StyledAnimationWrapper>
          <Box width={"100%"} maxWidth={"22rem"}>
            {isLoading ? (
              <StyledLoader>
                <Spinner width={"22rem"} />
              </StyledLoader>
            ) : (
              <Box ref={animationEl} width="100%" height="100%" />
            )}
          </Box>
        </StyledAnimationWrapper>
        <StyledAbout>
          <StyledText variant={"title-xs"} color={"text.primary"}>
            Hi, I'm Candice.
          </StyledText>
          <StyledText>
            I'm a software developer with a background in graphic design. I love
            working in a field that blends creativity and puzzle-solving (as
            both stimulate my imagination to no end).
          </StyledText>
          <StyledText>
            I primarily enjoy working in the front-end creating beautiful,
            intuitive user interfaces and data visualizations. When it comes to
            design, I'm endlessly inspired by the world around me - whether it
            be nature, the decor at a restaurant or art from a graphic novel.
          </StyledText>
        </StyledAbout>
      </Box>
    </Main>
  );
};

Component.displayName = "ProjectsPage";

export default Component;
