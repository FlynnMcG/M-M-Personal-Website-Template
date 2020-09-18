import React from "react";
import Modal from "@material-ui/core/Modal";
import { Paper } from "@material-ui/core";
import "./ProjectModal.css";

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
        <div className="modal-image-background"> 
        <img className="modal-image" src={this.props.image} alt="Italian Trulli" />
        </div>
        <div className="project-modal-text-body">
          <h1 id="simple-modal-description">{this.props.title}</h1>
          <h4>{this.props.organization}</h4>
          <div dangerouslySetInnerHTML={{__html: (this.props.description) ? this.props.description : ''}} />
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
        className="project-modal"
      >
        <Paper className="project-modal-paper">
          {body}
        </Paper>
      </Modal>
    );
  }
}

export default ProjectModal;
