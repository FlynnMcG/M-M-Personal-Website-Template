import React from "react";
import { Route, Switch, Router } from "react-router-dom";
import { history } from "./components/history";
import LandingPage from "./content/LandingPage/LandingPage";
import ProjectPage from "./content/ProjectPage/ProjectPage";
import { config } from "./data/config";

import "./App.css";
import "./components/Header.tsx";
import Header from "./components/Header";

function App() {
  return (
    <div className="app-div">
      <Header
        FirstName={config.firstName}
        LastName={config.lastName}
        GitHub={config.github}
        LinkedIn={config.linkedin}
        Email={config.email}
        twitterURL={config.twitter}
      />
      <Router history={history}>
        <Switch>
          <Route exact path="/">
            <LandingPage></LandingPage>
          </Route>
          <Route exact path="/projects">
            <ProjectPage projects={config.projects}></ProjectPage>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
