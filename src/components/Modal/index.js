import React from "react";
import PropTypes from "prop-types";
import { Icon } from "src/components/shared";
import {
  StyledModal,
  StyledClose,
  StyledContent,
  StyledBackdrop,
} from "./styles";

const Component = ({ children, handleClose, hasBackdrop, ...props }) => {
  return (
    <StyledModal hasBackdrop={true} {...props}>
      {hasBackdrop && <StyledBackdrop onClick={handleClose} />}
      {handleClose && (
        <StyledClose onClick={handleClose}>
          <Icon
            title={"close"}
            fill={"bg.reverse"}
            stroke={"bg.reverse"}
            glyph={"close"}
          ></Icon>
        </StyledClose>
      )}
      <StyledContent>{children}</StyledContent>
    </StyledModal>
  );
};

Component.propTypes = {
  hasBackdrop: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.node]),
  handleClose: PropTypes.func,
};

Component.displayName = "Modal";

export default Component;
