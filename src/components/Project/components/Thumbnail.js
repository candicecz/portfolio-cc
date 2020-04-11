import React from "react";
import PropTypes from "prop-types";
import {
  StyledThumbnailWrapper,
  StyledThumbnail,
  StyledThumbnailOverlay,
} from "../styles";
import { LazyLoad } from "src/components/shared/";
import { Text } from "src/components/shared";

const Component = (props) => {
  const { project } = props;
  const { id, name, categories, thumbnail } = project;
  const { fallback, main } = thumbnail;
  const subtitle = categories.slice(0, 2).join(" + ");

  return (
    <StyledThumbnailWrapper {...props}>
      <StyledThumbnail style={{ width: "100%", height: "100%" }}>
        <LazyLoad aspectRatio={`${(3 / 4) * 100}%`}>
          <picture style={{ width: "100%", height: "100%" }}>
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
              style={{ width: "100%", height: "100%" }}
              alt={"Project thumbnail."}
              src={require(`src/assets/${main.src}`)}
            />
          </picture>
        </LazyLoad>
        <StyledThumbnailOverlay to={{ pathname: `/projects/${id}` }}>
          <Text
            variant={["title-sm", "title-md"]}
            color={"text.reverse"}
            textAlign={"center"}
            style={{ zIndex: 1 }}
            p={[0, 2]}
          >
            {name}
          </Text>
          <Text
            variant={["title-xxs", "title-xxs", "title-xs"]}
            color={"text.reverse"}
            textAlign={"center"}
            style={{ zIndex: 1 }}
          >
            {subtitle}
          </Text>
        </StyledThumbnailOverlay>
      </StyledThumbnail>
    </StyledThumbnailWrapper>
  );
};

Component.propTypes = {
  project: PropTypes.object,
};

Component.displayName = "ProjectThumbnail";

export default Component;
