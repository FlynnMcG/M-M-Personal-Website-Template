import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

interface IProjectCardState {}

interface IProjectCardProps {
  id?: Number;
  title?: String;
  image?: String;
  description?: String;
  organization?: String;
}

export class ProjectCard extends React.Component<
  IProjectCardProps,
  IProjectCardState
> {
  render() {
    return (
      <Card className="project-card-root" style={{ maxWidth: 345, margin: 50 }}>
        <CardActionArea>
          <CardMedia
            className="project-card-image"
            style={{ height: 140 }}
            image="/static/images/cards/contemplative-reptile.jpg"
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
        </CardActionArea>
      </Card>
    );
  }
}
