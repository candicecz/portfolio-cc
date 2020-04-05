import React from "react";
import PropTypes from "prop-types";

import { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "src/theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div>Portfolio Routes</div>
    </ThemeProvider>
  );
};

App.propTypes = {
  location: PropTypes.object,
};

export default App;
