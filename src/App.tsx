import React from "react";
import { Route, Switch, Router } from "react-router-dom";
import { history } from "./components/history";
import LandingPage from "./content/LandingPage/LandingPage";
import ProjectPage from "./content/ProjectPage/ProjectPage";
import ResumePage from "./content/ResumePage/ResumePage";
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
      <div className="app-content">
        <Router history={history}>
          <Switch>
            <Route exact path="/M-M-Personal-Website-Template">
              <LandingPage
                firstName={config.firstName}
                lastName={config.lastName}
                imagePath={config.profile_picture}
                location={config.location}
                bio={config.bio}
                phone={config.phone}
                email={config.email}
                currentRole={config.current_role}
              ></LandingPage>
            </Route>
            <Route exact path="/M-M-Personal-Website-Template/resume">
              <ResumePage></ResumePage>
            </Route>
            <Route exact path="/M-M-Personal-Website-Template/projects">
              <ProjectPage projects={config.projects}></ProjectPage>
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
