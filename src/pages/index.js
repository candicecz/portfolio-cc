import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import PropTypes from "prop-types";
import Header from "src/components/Header";
import About from "src/components/About";
import Projects from "src/components/Projects";

// Manages + styles each page's layout.
const Component = ({ children }) => {
  const [isHeaderInView, setIsHeaderInView] = useState(null);
  const history = useHistory();

  const [activeSection, setActiveSection] = useState((prev) => {
    return {
      id: null,
      ratio: 0,
      ref: null,
    };
  });

  const [sections] = useState([
    {
      id: "about",
      title: "About",
      component: <About />,
    },
    {
      id: "projects",
      title: "Projects",
      component: <Projects />,
    },
  ]);

  useEffect(() => {
    const current_hash = history.location.hash;

    if (isHeaderInView === false && activeSection.id) {
      if (current_hash.slice(1) !== activeSection.id) {
        history.push(`#${activeSection.id}`);
      }
    }

    // Remove the hash when scrolled to the top of the page.
    if (isHeaderInView === true && activeSection.id) {
      if (current_hash) {
        history.push("");
      }
    }
  }, [isHeaderInView, activeSection, history]);

  return (
    <React.Fragment>
      <Header
        sections={sections}
        setIsHeaderInView={(v) => setIsHeaderInView(v)}
        setActiveSection={(v) => setActiveSection(v)}
      />
      {children({
        sections: sections,
        activeSection: activeSection,
        setActiveSection: (v) => setActiveSection(v),
      })}
    </React.Fragment>
  );
};

Component.propTypes = {
  children: PropTypes.func,
};

Component.displayName = "Pages";

export default Component;
