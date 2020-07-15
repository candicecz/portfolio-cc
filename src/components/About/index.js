import React, { useRef, useEffect, useState } from "react";
import lottie from "lottie-web";
import animationData from "src/assets/cc-animation.json";
import {
  StyledText,
  StyledAnimationWrapper,
  StyledAbout,
  StyledLoader,
  StyledSkills,
  StyledSkill,
} from "./styles";
import { Box, Spinner, Text } from "src/components/shared";
import { Slug } from "src/components/shared";
import SectionWrapper from "src/components/SectionWrapper";

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
    <React.Fragment>
      <SectionWrapper sectionTitle={"About"} patternBottom={true}>
        <Slug delay={300}>
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
                I'm a software developer with a background in graphic design. I
                love working in a field that blends creativity and
                puzzle-solving (as both stimulate my imagination to no end).
              </StyledText>
              <StyledText>
                I primarily enjoy working in the front-end creating beautiful,
                intuitive user interfaces and data visualizations. When it comes
                to design, I'm endlessly inspired by the world around me -
                whether it be nature, the decor at a restaurant or art from a
                graphic novel.
              </StyledText>
            </StyledAbout>
          </Box>
        </Slug>
      </SectionWrapper>
      <SectionWrapper sectionTitle={"Skills"} bg={"none"} my={4}>
        <StyledSkills>
          <StyledSkill>
            <img
              alt={"Programming Skills"}
              src={require(`src/assets/skill_technical.svg`)}
            />
            <Text variant="title-xxs" color="bg.primary" py={1}>
              Technical
            </Text>
            <Text variant="xs" color="text.secondary" textAlign="center">
              JavaScript, Node.js, React, GraphQL, HTML/CSS, MySQL
            </Text>
          </StyledSkill>
          <StyledSkill>
            <img
              alt={"Design Skills"}
              src={require(`src/assets/skill_design.svg`)}
            />
            <Text variant="title-xxs" color="bg.primary" py={1}>
              Design
            </Text>
            <Text variant="xs" color="text.secondary" textAlign="center">
              Adobe Photoshop, Adobe Illustrator, After Effects, Zeplin, Sketch
            </Text>
          </StyledSkill>
          <StyledSkill>
            <img
              alt={"Other Skills"}
              src={require(`src/assets/skill_other.svg`)}
            />
            <Text variant="title-xxs" color="bg.primary" py={1}>
              Other
            </Text>
            <Text variant="xs" color="text.secondary" textAlign="center">
              Web Content, Project Planning, Plant Watering, Guitar Picking,
              Coffee Drinking
            </Text>
          </StyledSkill>
        </StyledSkills>
      </SectionWrapper>
    </React.Fragment>
  );
};

Component.displayName = "ProjectsPage";

export default Component;
