import React, { useEffect, useState } from 'react';
import { Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import { Global, css } from '@emotion/react';

const GlobalStyles = () => (
  <Global
    styles={css`
      @import '~@react-pdf-viewer/core/lib/styles/index.css';
      @import '~@react-pdf-viewer/default-layout/lib/styles/index.css';
    `}
  />
);

const PDFCard = ({ pdfUrl }) => {
  const [pdfWorker, setPdfWorker] = useState(null);
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  useEffect(() => {
    const setupPdfWorker = async () => {
      try {
        console.log('Attempting to load PDF from URL:', pdfUrl);
        const pdfjsLib = await import('pdfjs-dist/legacy/build/pdf.js');
        pdfjsLib.GlobalWorkerOptions.workerSrc = `//mozilla.github.io/pdf.js/build/pdf.worker.js`;
        const worker = await pdfjsLib.getDocument({ url: pdfUrl }).promise;
        console.log('PDF worker created:', worker);
        setPdfWorker(worker);
      } catch (error) {
        console.error('Error setting up PDF worker:', error);
      }
    };
  
    setupPdfWorker();
  }, [pdfUrl]);

  return (
    <>
      <GlobalStyles />
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4">Resume</h2>
          <div className="h-[1000px]">
            {pdfWorker ? (
              <Viewer
                fileUrl={pdfUrl}
                plugins={[defaultLayoutPluginInstance]}
                pdfWorker={pdfWorker}
                renderError={(error) => (
                  <div className="flex items-center justify-center h-full">
                    <p className="text-red-500 font-bold">Error loading PDF: {error.message}</p>
                  </div>
                )}
              />
            ) : (
              <div className="flex items-center justify-center h-full">
                <p className="text-gray-500">Loading PDF...</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default PDFCard;