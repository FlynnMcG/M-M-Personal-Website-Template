import React from "react";
import logo from "./logo.svg";
import { Route, Switch, Router, Redirect } from "react-router-dom";
import { history } from "./components/history";
import LandingPage from "./content/LandingPage/LandingPage";
import ProjectPage from "./content/ProjectPage/ProjectPage";

import "./App.css";

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/">
          <LandingPage></LandingPage>
        </Route>
        <Route exact path="/projects">
          <ProjectPage></ProjectPage>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
