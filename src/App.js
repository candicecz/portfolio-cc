import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "src/theme";
import Project from "src/pages/Project";
import Main from "src/pages/Main";
import Page from "src/pages";

const App = () => {
  let location = useLocation();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Page>
        {(props) => {
          return (
            <Switch location={location}>
              <Route exact={true} path="/" render={() => <Main {...props} />} />
              <Route
                exact={true}
                path="/projects/:id"
                render={() => <Project {...props} />}
              />
            </Switch>
          );
        }}
      </Page>
    </ThemeProvider>
  );
};

App.propTypes = {
  location: PropTypes.object,
};

export default App;
