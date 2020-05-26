import React, { useState, useEffect } from "react";
import { Switch, Route, useLocation, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "src/theme";
import Header from "src/components/Header";
import About from "src/pages/About";
import Projects from "src/pages/Projects";
import Project from "src/pages/Project";
import Pages from "src/pages";

const App = () => {
  let location = useLocation();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <Switch location={location}>
        <Route exact={true} path="/" component={Pages} />
        <Route exact={true} path="/projects/:id" component={Project} />
      </Switch>
    </ThemeProvider>
  );
};

App.propTypes = {
  location: PropTypes.object,
};

export default App;
