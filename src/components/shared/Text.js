import styled from "styled-components";
import {
  border,
  color,
  flexbox,
  position,
  space,
  typography,
  variant,
  compose
} from "styled-system";

const TextBase = styled("div")(
  { userSelect: "none" },
  variant({
    scale: "text",
    variants: {}
  }),
  compose(border, color, flexbox, position, space, typography)
);

const StyledText = styled(TextBase)`
  white-space: ${props => props.whiteSpace};
  line-height: ${props => props.lineHeight};
  text-transform: ${props => props.textTransform};
  letter-spacing: ${props => props.letterSpacing};
`;

StyledText.defaultProps = {
  whiteSpace: "normal"
};

export default StyledText;
