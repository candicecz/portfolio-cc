import React from "react";
import {
  Switch,
  Route,
  BrowserRouter as Router,
  useLocation,
  Redirect,
} from "react-router-dom";
import PropTypes from "prop-types";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "src/theme";
import Header from "src/components/Header";
import Projects from "src/pages/Projects";

const App = () => {
  let location = useLocation();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <Router forceRefresh={true}>
        <Switch location={location}>
          <Route exact path="/projects" component={Projects}></Route>
          <Redirect from="/" to="/projects" />
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

App.propTypes = {
  location: PropTypes.object,
};

export default App;
