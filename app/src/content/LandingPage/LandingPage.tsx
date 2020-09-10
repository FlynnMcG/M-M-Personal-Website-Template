import React from "react";
import { Avatar, Paper } from "@material-ui/core";
import "./LandingPage.css";

interface ILandingCardState {}

interface ILandingCardProps {
  firstName?: string;
  lastName?: string;
  imagePath?: string;
  location?: string;
  bio?: string;
  phone?: string;
  email?: string;
  currentRole?: string;
}

class LandingPage extends React.Component<
  ILandingCardProps,
  ILandingCardState
> {
  render() {
    return (
      <div className="landing-page">
        <div className="landing-image">
          <Avatar
            alt="Image Not Found"
            src={this.props.imagePath}
            className="landing-avatar"
          />
        </div>
          <div>
            <h1 className="landing-name">
              {this.props.firstName} {this.props.lastName}
            </h1>
            <h5 className="landing-text">{this.props.currentRole}</h5>
            <h5 className="landing-text">{this.props.location}</h5>
            <h5 className="landing-bio-text">{this.props.bio} </h5>
            <h5 className="landing-bio-text landing-page-margin-bottom">

              <div>
                <a className="App-link" href={ "mailto:" + this.props.email}>{this.props.email}</a>
              </div>
              <div>{this.props.phone}</div>
            </h5>
            </div>
      </div>
    );
  }
}

export default LandingPage;
