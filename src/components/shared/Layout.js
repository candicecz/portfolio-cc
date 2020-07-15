import styled from "styled-components";
import { theme } from "src/theme";
import {
  color,
  flexbox,
  grid,
  layout,
  position,
  shadow,
  space,
} from "styled-system";

const StyledMain = styled("div")`
    ${color}
    ${flexbox}
    ${grid}
    ${layout}
    ${position}
    ${shadow}
    ${space}
`;

StyledMain.defaultProps = {
  position: "relative",
  width: "100%",
  maxWidth: theme.breakpoints[4],
  px: 4,
  py: 7,
  margin: "0 auto",
};

export default { Main: StyledMain };
