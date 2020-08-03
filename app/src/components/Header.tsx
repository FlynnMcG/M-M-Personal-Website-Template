import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

interface IHeaderState {}

interface IHeaderProps {
  FirstName?: string;
  LastName?: string;
  GitHub?: string;
  LinkedIn?: string;
}

const baseWindow =
  window.location.protocol +
  "://" +
  window.location.hostname +
  ":" +
  window.location.port;

class Header extends React.Component<IHeaderProps, IHeaderState> {
  render() {
    console.log(baseWindow);
    const name = this.props.FirstName + " " + this.props.LastName;
    const projectHref = baseWindow + "/projects";
    const resumeHref = baseWindow + "/resume";
    console.log(projectHref);
    console.log(resumeHref);

    return (
      <div className="personal-site-header">
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" className={"text"}>
              {name}
            </Typography>
            <Button color="inherit" href={projectHref}>
              Projects
            </Button>
            <Button color="inherit" href={this.props.GitHub}>
              GitHub
            </Button>
            <Button color="inherit" href={this.props.LinkedIn}>
              LinkedIn
            </Button>
            <Button color="inherit" href={resumeHref}>
              Resume
            </Button>
            <Button color="inherit">Contact Me</Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default Header;
