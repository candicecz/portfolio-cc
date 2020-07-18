/* eslint-disable no-undef */
import React from "react";
import PropTypes from "prop-types";
import { StyledPicture, StyledAssetWrapper, StyledVideo } from "../styles";
import { LazyLoad } from "src/components/shared/";

const Component = ({ asset, styles, ...rest }) => {
  const { fallback, main } = asset;
  return (
    <StyledAssetWrapper styles={styles} {...rest}>
      <LazyLoad aspectRatio={(styles && styles.aspectRatio) || null}>
        {(main.type || fallback.type).includes("image") && (
          <StyledPicture>
            {fallback && (
              <source
                srcSet={require(`src/assets/${fallback.src}`)}
                type={fallback.type}
              ></source>
            )}
            {main && (
              <source
                srcSet={require(`src/assets/${main.src}`)}
                type={main.type}
              ></source>
            )}
            <img
              style={{ cursor: "pointer", width: "100%", ...main.styles }}
              alt={"Project snapshot."}
              src={require(`src/assets/${main.src}`)}
            />
          </StyledPicture>
        )}
        {(main.type || fallback.type).includes("video") && (
          <StyledVideo>
            {fallback && (
              <source
                src={require(`src/assets/${fallback.src}`)}
                type={fallback.type}
              ></source>
            )}
            {main && (
              <source
                src={require(`src/assets/${main.src}`)}
                type={main.type}
              ></source>
            )}
          </StyledVideo>
        )}
      </LazyLoad>
    </StyledAssetWrapper>
  );
};

Component.propTypes = {
  asset: PropTypes.shape({
    main: PropTypes.shape({ src: PropTypes.string, type: PropTypes.string }),
    fallback: PropTypes.shape({
      src: PropTypes.string,
      type: PropTypes.string,
    }),
  }),
  styles: PropTypes.object,
  setModalOpen: PropTypes.func,
};

Component.displayName = "ProjectAsset";

export default Component;
