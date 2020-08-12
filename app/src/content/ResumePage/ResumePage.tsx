import React from "react";
import { Document, Page, pdfjs } from "react-pdf";
import PDF from "../../data/documents/Resume.pdf";
import { AppBar, Container, Button, Toolbar, IconButton } from "@material-ui/core";
import GetAppIcon from "@material-ui/icons/GetApp";
import "./ResumePage.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function removeTextLayerOffset() {
  const textLayers = document.querySelectorAll(".react-pdf__Page__textContent");
  textLayers.forEach((layer) => {
    const { style } = layer as HTMLElement;
    style.top = "0";
    style.left = "0";
    style.transform = "";
  });
}

class ResumePage extends React.Component {
  render() {
    return (
      <Container className="container" maxWidth="sm">
        <AppBar className="appBar" position="static">
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu">
              <GetAppIcon />
            </IconButton>
          </Toolbar>
        </AppBar>

        <Document file={PDF} className="resume">
          <Page pageNumber={1} onLoadSuccess={removeTextLayerOffset} />
        </Document>
      </Container>
    );
  }
}

export default ResumePage;
