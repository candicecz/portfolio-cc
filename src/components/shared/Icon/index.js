import React from "react";
import PropTypes from "prop-types";
import Glyph from "./components/Glyph";
import * as R from "ramda";
import { SvgWrapper, InlineSvg } from "./styles";
import { theme } from "src/theme";

const Component = ({
  glyph,
  size = 1.5,
  onClick,
  fill,
  stroke,
  strokeWidth,
  title,
  ...rest
}) => {
  let fillColor =
    fill.charAt(0) === "#" || fill === "none"
      ? fill
      : R.path(fill.split("."), theme.colors);

  let strokeColor =
    stroke.charAt(0) === "#" || stroke === "none"
      ? stroke
      : R.path(stroke.split("."), theme.colors);

  return (
    <SvgWrapper
      size={size}
      fill={fillColor}
      stroke={strokeColor}
      strokeWidth={strokeWidth}
      onClick={onClick}
      {...rest}
    >
      <InlineSvg ariaLabelledBy={title || "title"}>
        {title && <title id={title}>{title}</title>}
        <Glyph glyph={glyph} />
      </InlineSvg>
    </SvgWrapper>
  );
};

Component.defaultProps = {
  stroke: "#000",
  fill: "none",
};

Component.propTypes = {
  glyph: PropTypes.string.isRequired,
  fill: PropTypes.string,
  strokeWidth: PropTypes.string,
  stroke: PropTypes.string,
  size: PropTypes.number,
  title: PropTypes.string,
  onClick: PropTypes.func,
};

Component.displayName = "Icon";

export default Component;
