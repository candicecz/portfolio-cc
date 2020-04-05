import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { StyledLoader, StyledWrapper, StyledPlaceholder } from "./styles";

const Component = ({ children, ...rest }) => {
  const [showLoadedAsset, setShowLoadedAsset] = useState(false);
  const [imgRef, setImgRef] = useState();

  useEffect(() => {
    let observer;
    let didCancel = false;
    if (imgRef && showLoadedAsset === false) {
      if (IntersectionObserver) {
        observer = new IntersectionObserver(
          entries => {
            entries.forEach(entry => {
              if (
                !didCancel &&
                (entry.intersectionRatio > 0 || entry.isIntersecting)
              ) {
                setShowLoadedAsset(true);
                observer.unobserve(imgRef);
              }
            });
          },
          { threshold: [0.1], rootMargin: "0px" }
        );
        observer.observe(imgRef);
      } else {
        // Fallback for old browsers
        setShowLoadedAsset(true);
      }
    }
    return () => {
      didCancel = true;
      if (observer && observer.unobserve) {
        observer.unobserve(imgRef);
      }
    };
  }, [showLoadedAsset, imgRef, setShowLoadedAsset]);

  return (
    <StyledLoader ref={setImgRef} {...rest}>
      <StyledWrapper show={!showLoadedAsset}>
        <StyledPlaceholder />
      </StyledWrapper>
      {showLoadedAsset && (
        <StyledWrapper show={showLoadedAsset}>{children}</StyledWrapper>
      )}
    </StyledLoader>
  );
};

Component.propTypes = {
  aspectRatio: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.array])
};
Component.displayName = "LazyLoad";

export default Component;
