import React from "react";
import { ProjectCard } from "../../components/ProjectCard";
import "./ProjectPage.css";
import { config } from "../../data/config";

class ProjectPage extends React.Component {
  render() {
    const ProjectProps = {
      projects: config.projects[0],
    };

    return (
      <div className="profile-page">
        <h1>Project Page</h1>
        <ProjectCard {...config.projects[0]} />
      </div>
    );
  }
}

export default ProjectPage;
