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
import About from "src/pages/About";
import Projects from "src/pages/Projects";
import Project from "src/pages/Project";

const App = () => {
  let location = useLocation();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <Router forceRefresh={true}>
        <Switch location={location}>
          <Route exact path="/about" component={About}></Route>
          <Route exact path="/projects" component={Projects}></Route>
          <Route path="/projects/:id" component={Project}></Route>
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
