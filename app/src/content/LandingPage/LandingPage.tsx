import React from "react";
import { Avatar } from "@material-ui/core";
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
          <div className="landing-text">
            <h1>
              {this.props.firstName} {this.props.lastName}
            </h1>
          </div>
          <div className="landing-text">
            <h5>{this.props.currentRole}</h5>
          </div>
          <div className="landing-text">
            <h5>{this.props.location}</h5>
          </div>
          <div className="landing-text">
            <h5>{this.props.bio} </h5>
          </div>
          <div className="landing-text">
            <h5>
              <div>{this.props.email}</div>
              <div>{this.props.phone}</div>
            </h5>
          </div>
        </div>
      </div>
    );
  }
}

export default LandingPage;
