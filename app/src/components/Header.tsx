import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";

interface IHeaderState {}

interface IHeaderProps {
  FirstName?: string;
  LastName?: string;
  GitHub?: string;
  LinkedIn?: string;
  Email?: string;
  twitterURL?: string;
}
class Header extends React.Component<IHeaderProps, IHeaderState> {
  render() {
    const name = this.props.FirstName + " " + this.props.LastName;
    return (
      <div className="personal-site-header">
        <AppBar position="static">
          <Toolbar>
            <Button color="inherit" href={"/"}>
              {name}
            </Button>
            <Button color="inherit" href={"/projects"}>
              Projects
            </Button>
            <Button color="inherit" href={this.props.GitHub}>
              GitHub
            </Button>
            <Button color="inherit" href={this.props.LinkedIn}>
              LinkedIn
            </Button>
            <Button color="inherit" href={this.props.twitterURL}>
              Twitter
            </Button>
            <Button color="inherit" href="/resume">
              Resume
            </Button>
            <Button color="inherit" href={`mailto:${this.props.Email}`}>
              Contact Me
            </Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default Header;
