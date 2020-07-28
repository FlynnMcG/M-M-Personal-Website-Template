import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

class Header extends React.Component {
  render() {
    return (
      <div className="personal-site-header">
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" className={"text"}>
              FirstName LastName
            </Typography>
            <Button color="inherit">Project</Button>
            <Button color="inherit">GitHub</Button>
            <Button color="inherit">LinkedIn</Button>
            <Button color="inherit">Resume</Button>
            <Button color="inherit">Contact Me</Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default Header;
