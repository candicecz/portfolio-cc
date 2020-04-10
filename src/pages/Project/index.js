import React from "react";
import PropTypes from "prop-types";
import * as R from "ramda";
import { useParams } from "react-router-dom";
import { projects_data } from "src/data";
import { StyledProject } from "./styles";
import { Details, Gallery, Asset, Footer } from "src/components/Project";

const Component = ({ isActive, project, delay = 500, ...rest }) => {
  const params = useParams();

  if (!project && params.id) {
    project = R.filter((p) => +p.id === +params.id, projects_data)[0];
    isActive = true;
  }
  return (
    <StyledProject {...rest}>
      <Details project={project} delay={isActive ? delay : 0} />
      <Gallery
        color={project.bg}
        sections={project.sections}
        delay={isActive ? delay : 0}
      >
        {(props) => <Asset {...props}></Asset>}
      </Gallery>
      <Footer />
    </StyledProject>
  );
};

Component.propTypes = {
  project: PropTypes.object,
  isActive: PropTypes.bool,
  delay: PropTypes.number,
};

Component.displayName = "Project";

export default Component;
