import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import PropTypes from "prop-types";
import Header from "src/components/Header";
import About from "src/components/About";
import Projects from "src/components/Projects";

// Manages + styles each page's layout.
const Component = ({ children }) => {
  const location = useLocation();

  const [activeSection, setActiveSection] = useState((prev) => {
    // Set the active state to the location hash if it exists
    if (location.hash && location.hash.slice(1)) {
      return { ratio: 0, id: location.hash.slice(1) };
    }
    return {
      id: null,
      ratio: 0,
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

  // Set the title to the active section
  useEffect(() => {
    document.title = `Candice Czech ${
      activeSection.id
        ? ` - ${
            activeSection.id.charAt(0).toUpperCase() + activeSection.id.slice(1)
          }`
        : ""
    }`;
  }, [activeSection]);

  return (
    <React.Fragment>
      <Header
        sections={sections}
        activeSectionId={activeSection && activeSection.id}
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
