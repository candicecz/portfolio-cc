import styled from "styled-components";
import {
  color,
  flexbox,
  grid,
  layout,
  position,
  shadow,
  space,
  typography,
  compose
} from "styled-system";

const StyledBox = styled("div")(
  compose(color, flexbox, grid, layout, position, shadow, space, typography)
);

StyledBox.defaultProps = {
  display: "flex"
};

export default StyledBox;
