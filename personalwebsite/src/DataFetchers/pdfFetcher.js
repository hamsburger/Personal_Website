 import DocViewer, { PDFRenderer, DocViewerRenderers } from "@cyntler/react-doc-viewer"
import React, { useState, useEffect } from 'react';
// import { Document, Page } from '@react-pdf-viewer/core';
// import '@react-pdf-viewer/core/lib/styles/index.css';
// import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import { pdfjs, Document, Page } from 'react-pdf';
import 'react-pdf/dist/Page/TextLayer.css';
import 'react-pdf/dist/Page/AnnotationLayer.css';
// pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


// export default function PDFFetcher(urlObj){
//     /**
//      * @param {Object} urlObj: URI to be fetched
//      * @param {String} urlObj.uri: URI of URL object
//      * @param {String} urlObj.title: Title of URL object. This is matched with our routes to figure out what content we are actually rendering. 
//      * @returns {Object.<String, ReactElement>} 
//      * fetched data with new data.
//      * 
//      */
//     // Loading a document.
//     const loadingTask = pdfjsLib.getDocument(pdfPath);
//     const pdfDocument = await loadingTask.promise;
//     // Request a first page
//     const pdfPage = await pdfDocument.getPage(1);
//     // Display page on the existing canvas with 100% scale.
//     const viewport = pdfPage.getViewport({ scale: 1.0 });
//     const canvas = document.getElementById("theCanvas");
//     canvas.width = viewport.width;
//     canvas.height = viewport.height;
//     const ctx = canvas.getContext("2d");
//     const renderTask = pdfPage.render({
//     canvasContext: ctx,
//     viewport,
//     });
//     await renderTask.promise;
//     pdfjsLib.getDocument(urlObj.url)
//     .then(pdfDocument => pdfDocument.getPage(1))
//     useEffect(() => {

//     })


//     return new Promise((resolve, reject) => {
//         resolve(<PDFDoc urlObj={urlObj}/>)      
//     })
// }

// function PDFDoc({urlObj}) {
//     const [numPages, setNumPages] = useState();
//     const [pageNumber, setPageNumber] = useState(4);
//     // console.log("URL:", urlObj)

//     function onGetTextSuccess({ items }){
//         const textLayers = document.querySelectorAll(".react-pdf__Page__textContent");
//         console.log("Text Layers")
//         console.log(textLayers)
//         textLayers.forEach(layer => {
//             layer.style.color = "red"
//         });
//     } 
//     function onDocumentLoadSuccess({ numPages }) {
//       const textLayers = document.querySelectorAll(".react-pdf__Document");
//       console.log(textLayers)
//       setNumPages(numPages);
//     }

//     // console.log(`Worker Version: ${pdfjs.GlobalWorkerOptions.workerSrc}`)
//     return (
//       <div style={{ position: "relative", zIndex: 2}}>
//         <Document file={"/ppt_presentations/ppt_job_presentation.pdf"} onLoadSuccess={onDocumentLoadSuccess} 
//             onGetTextSuccess={onGetTextSuccess} 
//             onLoadError={console.error}>
//           <Page pageNumber={pageNumber} />
//         </Document>
//         <p>
//           Page {pageNumber} of {numPages}
//         </p>
//       </div>
//     )
// };
const PDFViewer = ({ url }) => {
    console.log(url)
    return <DocViewer
        pluginRenderers={[PDFRenderer]} 
        style={{
            position: "relative", zIndex: 2
        }}  
        config={{
            header: {
                disableHeader: true
            }
        }}
        documents={[
            { "uri": url },
        ]}
    />
}

export default function PDFFetcher(urlObj){
    /**
     * @param {Object} urlObj: URI to be fetched
     * @param {String} urlObj.uri: URI of URL object
     * @param {String} urlObj.title: Title of URL object. This is matched with our routes to figure out what content we are actually rendering. 
     * @returns {Object.<String, ReactElement>} 
     * fetched data with new data.
     * 
     */
    return new Promise((resolve, reject) => {
        // resolve(<PDFDoc urlObj={urlObj}/>)
        resolve(<div style={{minHeight: "500px", 
                             marginTop: "30px"}}><PDFViewer url={urlObj.url}/></div>)      
    })
}
