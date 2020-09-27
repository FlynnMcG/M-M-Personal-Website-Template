import React from "react";
import { ProjectCard } from "../../components/ProjectCard";
import "./ProjectPage.css";
import { Grid } from "@material-ui/core";

interface IProjectPageState {}

interface project {
  id?: Number;
  title?: string;
  image?: string;
  description?: string;
  organization?: string;
}

interface IProjectPageProps {
  projects?: project[];
}

class ProjectPage extends React.Component<
  IProjectPageProps,
  IProjectPageState
> {
  render() {
    var numRows = 0;
    if (this.props.projects) {
      numRows = Math.ceil(this.props.projects?.length / 3);

      var rows = [];
      var child = [];

      for (let i = 0; i < numRows; i++) {
        for (
          let j = i * 3, k = 0;
          k < 3 && j + k < this.props.projects?.length;
          k++
        ) {
          child.push(
            <Grid item xs>
              <ProjectCard {...this.props.projects[j + k]} />
            </Grid>
          );
        }
        rows.push(
          <Grid
            className="project-grid-row"
            container
            item
            xs={"auto"}
            spacing={1}
          >
            {child}
          </Grid>
        );
        child = [];
      }
    }

    return (
      <div className="project-page">
        <h1 className="project-header">Project Page</h1>
        <Grid className="project-grid" container spacing={1}>
          {rows}
        </Grid>
      </div>
    );
  }
}

export default ProjectPage;
