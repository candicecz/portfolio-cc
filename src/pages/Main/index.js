import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { Box } from "src/components/shared";
import { StyledSection } from "./styles";

const Component = ({ sections, activeSection, setActiveSection }) => {
  const rootEl = useRef(null);
  const sectionEl = useRef(
    sections.reduce((sectionRefs, section) => {
      sectionRefs[section.id] = {
        ref: null,
        id: section.id,
        ratio: 0,
      };
      return sectionRefs;
    }, {})
  );

  const handleObserverEvent = (entries) => {
    entries.forEach((entry) => {
      return (sectionEl.current[entry.target.id].ratio =
        entry.intersectionRatio);
    });

    // Sets the currently active section based on whether it has the majority ratio of visibility.
    const currentActive = Object.values(sectionEl.current).reduce(
      (acc, value) => (value.ratio > acc.ratio ? value : acc),
      activeSection
    );

    // Sets the state to the new active section if it has a higher ratio of visibility than the previous.
    setActiveSection((prev) => {
      if (currentActive.ratio < 1 && currentActive.ratio > prev.ratio) {
        return currentActive;
      }
      return prev;
    });
  };

  const observer = new IntersectionObserver(handleObserverEvent, {
    threshold: new Array(101).fill(0).map((v, i) => i * 0.01),
  });

  useEffect(() => {
    Object.values(sectionEl.current).forEach((section) => {
      observer.observe(section.ref);
    });
  }, [sectionEl, observer]);

  return (
    <Box flexDirection={"column"} ref={rootEl} pb={["5rem", "5rem", "10rem"]}>
      {sections.map(({ id, component }) => {
        return (
          <StyledSection
            key={id}
            id={id}
            ref={(el) => (sectionEl.current[id].ref = el)}
          >
            {component}
          </StyledSection>
        );
      })}
    </Box>
  );
};
Component.propTypes = {
  sections: PropTypes.array.isRequired,
  activeSection: PropTypes.object.isRequired,
  setActiveSection: PropTypes.func.isRequired,
};

Component.displayName = "Main";

export default Component;
