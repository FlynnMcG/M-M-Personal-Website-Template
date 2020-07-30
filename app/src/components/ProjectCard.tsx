import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import ProjectModal from "./ProjectModal";
import Button from "@material-ui/core/Button";
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
        <Card className="project-card-root" style={{ maxWidth: 345 }} raised>
          <CardActionArea>
            <CardMedia
              className="project-card-image"
              style={{ height: 150 }}
              image={this.props.image}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {this.props.title}
              </Typography>
              <Typography gutterBottom variant="subtitle1" component="h5">
                {this.props.organization}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {this.props.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                color="primary"
                onClick={this.showProjectModal}
              >
                Learn More
              </Button>
            </CardActions>
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
