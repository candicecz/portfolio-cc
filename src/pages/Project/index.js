import React, { useState } from "react";
import PropTypes from "prop-types";
import * as R from "ramda";
import { useParams } from "react-router-dom";
import { projects_data } from "src/data";
import { StyledProject } from "./styles";
import { Details, Gallery, Asset, Footer } from "src/components/Project";
import Modal from "src/components/Modal";

const Component = ({ isActive, project, delay = 300, ...rest }) => {
  const [componentProps, setComponentProps] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const params = useParams();

  if (!project && params.id) {
    project = R.filter((p) => +p.id === +params.id, projects_data)[0];
    isActive = true;
  }
  return (
    <React.Fragment>
      {isModalOpen && (
        <Modal hasBackdrop={true} handleClose={() => setModalOpen(false)}>
          <Asset pb="unset" maxWidth={"unset"} {...componentProps}></Asset>
        </Modal>
      )}
      <StyledProject {...rest}>
        <Details project={project} delay={isActive ? delay : 0} />
        <Gallery
          color={project.bg}
          sections={project.sections}
          delay={isActive ? delay : 0}
        >
          {(props) => (
            <Asset
              onClick={() => {
                setComponentProps(props);
                setModalOpen(true);
              }}
              {...props}
            ></Asset>
          )}
        </Gallery>
        <Footer />
      </StyledProject>
    </React.Fragment>
  );
};

Component.propTypes = {
  project: PropTypes.object,
  isActive: PropTypes.bool,
  delay: PropTypes.number,
};

Component.displayName = "Project";

export default Component;
