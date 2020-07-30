import React from "react";
import { Route, Switch, Router } from "react-router-dom";
import { history } from "./components/history";
import LandingPage from "./content/LandingPage/LandingPage";
import ProjectPage from "./content/ProjectPage/ProjectPage";
import ResumePage from "./content/ResumePage/ResumePage";
import "./App.css";
import "./components/Header.tsx";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <Router history={history}>
        <Switch>
          <Route exact path="/">
            <LandingPage></LandingPage>
          </Route>
          <Route exact path="/projects">
            <ProjectPage></ProjectPage>
          </Route>
          <Route exact path="/resume">
            <ResumePage></ResumePage>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
