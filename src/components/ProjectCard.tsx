import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import ProjectModal from "./ProjectModal";
import "./ProjectCard.css";

interface IProjectCardState {}

interface IProjectCardProps {
  id?: Number;
  title?: string;
  image?: string;
  description?: string;
  organization?: string;
}

export class ProjectCard extends React.Component<
  IProjectCardProps,
  IProjectCardState
> {
  state = {
    openModal: false,
  };

  showProjectModal = () => {
    this.setState({
      openModal: true,
    });
  };

  hideProjectModal = () => {
    this.setState({
      openModal: false,
    });
  };

  render() {
    console.log(this.props);
    return (
      <div>
        <Card className="project-card-root" raised onClick={() => {this.showProjectModal();}}>
          <CardActionArea>
            <CardMedia
              className="project-card-image"
              image={this.props.image}
              title="project_image"
            />
            <CardContent>
              <Typography  variant="h4" component="h2">
                {this.props.title}
              </Typography>
              <Typography variant="h6" component="h4">
                {this.props.organization}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        {this.state.openModal && (
          <ProjectModal
            handleClose={this.hideProjectModal}
            isOpen={this.state.openModal}
            id={this.props.id}
            title={this.props.title}
            image={this.props.image}
            description={this.props.description}
            organization={this.props.organization}
          />
        )}
      </div>
    );
  }
}
