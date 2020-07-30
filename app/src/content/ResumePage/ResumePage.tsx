import React from "react";
import { Document, Page, pdfjs } from "react-pdf";
import PDF from "../../data/documents/Resume.pdf";

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
      <Document file={PDF}>
        <Page pageNumber={1} onLoadSuccess={removeTextLayerOffset} />
      </Document>
    );
  }
}

export default ResumePage;
