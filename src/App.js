import React from "react";
import PropTypes from "prop-types";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "src/theme";
import Header from "src/components/Header";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <div>Portfolio Routes</div>
    </ThemeProvider>
  );
};

App.propTypes = {
  location: PropTypes.object,
};

export default App;
