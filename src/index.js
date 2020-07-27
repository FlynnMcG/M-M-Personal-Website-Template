import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header.js";
import LandingPage from "./content/LandingPage/LandingPage.js";
import ProjectPage from "./content/ProjectPage/ProjectPage.js";
import { history } from "./components/history.js";

import { Route, Switch, HashRouter, Redirect } from "react-router-dom";
ReactDOM.render(
  <HashRouter history={history}>
    <Switch>
      <Route path="/">
        <LandingPage />
      </Route>
      <Route exact path="/projects">
        <ProjectPage />
      </Route>
    </Switch>
  </HashRouter>,
  document.getElementById("root")
);
