import React, { useRef, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { theme } from "src/theme";
import useMedia from "src/hooks/useMedia";
import { Icon } from "src/components/shared";
import Navigation from "./components/Navigation";
import Social from "./components/Social";
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
                  mx={2}
                  zIndex={1000}
                />
                {sections && (
                  <Navigation
                    sections={sections}
                    activeSectionId={activeSectionId}
                    isToolbar={isToolbar}
                    setActiveSection={(v) => setActiveSection(v)}
                  />
                )}
              </React.Fragment>
            )}
            <StyledSVG
              isToolbar={isToolbar}
              className={isLoaded ? "" : "preload"}
            >
              <path
                opacity={0.5}
                fill="#FFFFFF"
                d={
                  isToolbar
                    ? "M-2.7,0.8L-2.2,207h2988.9c0.1-53.2,0.2-204.9,0.2-204.8S-2.7,0.8-2.7,0.8z"
                    : "M1550.6,147.9c-270.2-58.6-639.4,5-639.4,5C377.6,233.3-2.7,0.8-2.7,0.8L-2.2,207h2988.9c0.1-53.2,0.2-204.9,0.2-204.8s-573.7,115.5-736.5,147.3c-125.9,18.2-252.8,28-380,29.2c-51.3,0.5-102.7-0.7-153.8-5.4C1660.8,168.1,1605.4,159.6,1550.6,147.9z"
                }
              />
              <path
                opacity="0.5"
                fill="#FFFFFF"
                d="M2985.1,105.1c0,0-0.1,66.4-0.2,99.7H-2.2v-79.1
                c0,0,421.5,112.5,912.1,50c0,0,436-79.8,686.9-21.2c108.2,25.3,226.6,25.6,337.3,30.3C2282.1,199.6,2645.1,185.5,2985.1,105.1z"
              />
              <path
                opacity="0.5"
                fill="#FFFFFF"
                d="M888.1,159.2C402.5,196-2.2,71.9-2.2,71.9v133.6h2987.4
                l-0.3-154.7c-287.9,57.9-577.2,116-870.7,129.1c-112.3,5-224.9,1.5-336.9-8.7c-86.1-7.8-171.5-22.6-257.8-27.1
                c-86.2-4.5-166,12.1-250.8,21.4C1089.8,185.2,1066.5,145.6,888.1,159.2z"
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
