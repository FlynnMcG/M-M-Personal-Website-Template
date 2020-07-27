import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";

class Header extends React.Component {
  render() {
    return (
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    );
  }
}

export default Header;
