import React from "react";
import PropTypes from "prop-types";
import { StyledSVG } from "../styles";

const Component = (props) => {
  return (
    <StyledSVG {...props}>
      <path
        opacity="0.7"
        className="wave"
        fill="#FFFFFF"
        d="M1,0c0,0-1,301.6-1,301.6c-0.1,16.6,105.6,17.1,115.1,16.7
		c74.7-2.7,148.9-19.4,220.9-38.4c101.6-26.9,201.2-61.2,297.3-103.7c99.3-43.9,194.1-77.1,303.9-82.5
		c169.6-8.4,317.3,45.7,429.5,108.8L1367.3,0H2.3"
      />
      <path
        opacity="0.7"
        fill="#FFFFFF"
        d="M2.2,0l0.3,270.3c41.5-4.2,82.9-18.8,124.6-49.5
		c54.9-40.4,120.7-59.9,187.7-68c70-8.5,145.2,5.6,212.2-20.5c40.9-15.9,73.3-36.5,118-41c280.3-28.1,544.7,86.1,724.7,193.7L1368,1
		L2.2,0z"
      />
      <path
        opacity="0.9"
        fill="#FFFFFF"
        d="M2.3,0h1365c0,0-0.2,100.5-0.2,100.5c0-12-128.1-42.8-142-46.4
		c-55.9-14.2-112.9-24.1-170.4-28.8C928.1,15,799.1,30.3,679.5,73.4C604,100.7,539.2,145.3,467.8,181
		c-88.2,44.1-181.8,80.2-279,98.5C173.3,282.3,1.9,301.6,1.9,286C1.9,286,2.3,0,2.3,0z"
      />
    </StyledSVG>
  );
};

Component.propTypes = {
  index: PropTypes.number,
};

Component.displayName = "SectionPattern";
export default Component;
