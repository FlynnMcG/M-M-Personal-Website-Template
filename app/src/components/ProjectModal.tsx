import React from "react";
import Modal from "@material-ui/core/Modal";
import { Paper } from "@material-ui/core";

interface IProjectModalState {}

interface IProjectModalProps {
  handleClose?: Function;
  isOpen?: boolean;
  id?: Number;
  title?: string;
  image?: string;
  description?: string;
  organization?: string;
}

class ProjectModal extends React.Component<
  IProjectModalProps,
  IProjectModalState
> {
  render() {
    const body = (
      <div>
        <img src={this.props.image} alt="Italian Trulli" />
        <div className="project-modal-text-body">
          <h1 id="simple-modal-description">{this.props.title}</h1>
          <h4>{this.props.organization}</h4>
          <p>{this.props.description}</p>
        </div>
      </div>
    );
    var open = false;
    if (this.props.isOpen) {
      open = this.props.isOpen;
    }
    return (
      <Modal
        open={open}
        onClose={() => this.props.handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        onBackdropClick={() => {
          this.props.handleClose
            ? this.props.handleClose()
            : console.log("No handleClose exits");
        }}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Paper
          style={{
            position: "absolute",
            width: "auto",
            backgroundColor: "white",
            border: "2px solid #000",
          }}
        >
          {body}
        </Paper>
      </Modal>
    );
  }
}

export default ProjectModal;
