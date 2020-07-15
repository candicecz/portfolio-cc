import React, { useRef, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { theme } from "src/theme";
import useMedia from "src/hooks/useMedia";
import { Icon } from "src/components/shared";
import Navigation from "./components/Navigation";
import Info from "./components/Info";
import {
  StyledHeader,
  StyledToolbar,
  StyledWrapper,
  StyledSVG,
} from "./styles";

const Component = ({ sections, activeSectionId, setActiveSection }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isToolbar, setIsToolbar] = useState(false);
  const headerEl = useRef(false);

  const isDesktop = useMedia(
    theme.breakpoints.slice().reverse(),
    [true, true, true],
    false
  );

  const callback = (entries) => {
    entries.forEach((entry) => {
      // Reset the active section when the header is in view at 50%
      setActiveSection((prev) =>
        prev.id && entry.intersectionRatio > 0.5
          ? { id: null, ratio: null }
          : prev
      );

      // Toggle the toolbar when the header is almost out of view
      setIsToolbar((prev) =>
        prev !== entry.intersectionRatio < 0.01
          ? entry.intersectionRatio < 0.01
          : prev
      );
    });
  };

  const observer = new IntersectionObserver(callback, {
    threshold: [0.5, 0.01],
  });

  // Show toolbar only on mobile view.
  useEffect(() => {
    isDesktop && observer.observe(headerEl.current);
    return () => {
      setIsToolbar((prev) => (isDesktop ? prev : false));
      observer.unobserve(headerEl.current);
    };
  }, [headerEl, observer, isDesktop]);

  // Set load condition for animation styles.
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div ref={headerEl}>
      <StyledHeader>
        <StyledWrapper>
          <Info />
          {sections && (
            <Navigation
              sections={sections}
              activeSectionId={activeSectionId}
              isToolbar={isToolbar}
              setActiveSection={(v) => setActiveSection(v)}
            />
          )}

          <StyledToolbar
            isToolbar={isToolbar}
            className={isLoaded ? "" : "preload"}
          >
            {isToolbar && (
              <React.Fragment>
                <Icon
                  glyph={"cc-logo"}
                  fill={"bg.default"}
                  stroke={"bg.primary"}
                  size={2}
                  mx={3}
                  zIndex={1000}
                />
                {sections && (
                  <Navigation
                    sections={sections}
                    activeSectionId={activeSectionId}
                    isToolbar={isToolbar}
                    setActiveSection={(v) => setActiveSection(v)}
                    mx={3}
                  />
                )}
              </React.Fragment>
            )}
            <StyledSVG
              isToolbar={isToolbar}
              className={isLoaded ? "" : "preload"}
            >
              <path
                opacity={0.75}
                fill="#FFFFFF"
                d={
                  isToolbar
                    ? "M-2.7,0.8L-2.2,207h2988.9c0.1-53.2,0.2-204.9,0.2-204.8S-2.7,0.8-2.7,0.8z"
                    : "M1553.2,144.1c-270.2-58.6-639.4,5-639.4,5C616.5,193.9,261.2,156.8-0.1-3l0.5,206.2h2988.9c0.1-53.2,0.3-204.8,0.2-204.8c-437,102.1-601.1,147.4-1116.5,176.5c-51.2,2.9-102.7-0.7-153.8-5.4C1663.4,164.3,1608,155.8,1553.2,144.1z"
                }
              />
              <path
                opacity={0.9}
                fill="#FFFFFF"
                d="M2985.1,105.1c0,0-0.1,66.4-0.2,99.7H-2.2v-79.1
                c0,0,421.5,112.5,912.1,50c0,0,436-79.8,686.9-21.2c108.2,25.3,226.6,25.6,337.3,30.3C2282.1,199.6,2645.1,185.5,2985.1,105.1z"
              />
              <path
                opacity={0.5}
                fill={"#FFFFFF"}
                d="M880.3,158.1c-104.4,0-346,58-882.5-86c0,44.5,0,89,0,133.5
                c551.1,0,1102.2,0,1653.3,0c360.4,0,724.3,0,1086.1,0c59.3,0,118.5,0,177.8,0c23.4,0,46.8,0,70.3,0l-0.3-154.7
                c-287.9,57.9-577.2,116-870.7,129.1c-112.6,5-224.5-5.4-336.9-8.7c-142.4-4.2-295.5-60.7-430.4-33.2
                C1072.3,193.8,985.2,158.1,880.3,158.1z"
              />
            </StyledSVG>
          </StyledToolbar>
        </StyledWrapper>
      </StyledHeader>
    </div>
  );
};

Component.propTypes = {
  sections: PropTypes.array,
  activeSectionId: PropTypes.string,
  setActiveSection: PropTypes.func,
};

Component.displayName = "Header";

export default Component;
