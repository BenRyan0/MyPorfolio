import React, { useRef, useState, useEffect } from "react";
import { Worker, Viewer, SpecialZoomLevel } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "../assets/resume-css/index.css";

const MyResume = () => {
  const viewerRef = useRef(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [scale, setScale] = useState(SpecialZoomLevel.PageFit); // 🟢

  const handleFullscreen = () => {
    const container = viewerRef.current;
    if (container.requestFullscreen) {
      container.requestFullscreen();
    } else if (container.webkitRequestFullscreen) {
      container.webkitRequestFullscreen();
    } else if (container.mozRequestFullScreen) {
      container.mozRequestFullScreen();
    } else if (container.msRequestFullscreen) {
      container.msRequestFullscreen();
    }
  };

  useEffect(() => {
    const handleChange = () => {
      const inFullscreen =
        document.fullscreenElement === viewerRef.current ||
        document.webkitFullscreenElement === viewerRef.current ||
        document.mozFullScreenElement === viewerRef.current ||
        document.msFullscreenElement === viewerRef.current;

      setIsFullscreen(inFullscreen);

      // Reset scale when in fullscreen
      if (inFullscreen) {
        setScale(SpecialZoomLevel.PageFit);
      } else {
        // Restore responsive scaling
        const width = window.innerWidth;
        if (width < 640) {
          setScale(1.0);
        } else if (width < 1024) {
          setScale(1.0);
        } else {
          setScale(1.0);
        }
      }
    };

    document.addEventListener("fullscreenchange", handleChange);
    document.addEventListener("webkitfullscreenchange", handleChange);
    document.addEventListener("mozfullscreenchange", handleChange);
    document.addEventListener("MSFullscreenChange", handleChange);

    return () => {
      document.removeEventListener("fullscreenchange", handleChange);
      document.removeEventListener("webkitfullscreenchange", handleChange);
      document.removeEventListener("mozfullscreenchange", handleChange);
      document.removeEventListener("MSFullscreenChange", handleChange);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width < 640) {
        setScale(0.5); // Mobile view
      } else if (width < 1024) {
        setScale(1.0); // Tablet view
      } else {
        setScale(1.0); // Desktop default
      }
    };

    handleResize(); // Initial set
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="h-screen bg-[#020617] flex flex-col justify-center items-center gap-4 p-4">
      <div
        ref={viewerRef}
        className={`relative inset-0 w-full md:w-[60%] py-5 rounded-xl overflow-hidden shadow-xl bg-white flex flex-row justify-center items-center text-center  ${
          isFullscreen
            ? "flex justify-center items-center h-screen "
            : "flex justify-center items-center"
        } cursor-pointer group`}
        onClick={handleFullscreen}
      >
        {/* Hover Text Prompt: hidden when fullscreen */}
        {!isFullscreen && (
          <div className="absolute inset-0 flex items-center justify-center text-center z-10 text-white bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-lg font-semibold">
              Click to View in Fullscreen
            </span>
          </div>
        )}

        {isFullscreen && (
          <button
            onClick={() => {
              if (document.exitFullscreen) {
                document.exitFullscreen();
              } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
              } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
              } else if (document.msExitFullscreen) {
                document.msExitFullscreen();
              }
            }}
            className="absolute bottom-4 right-4 z-50 px-3 py-2 bg-red-600 text-white rounded-md shadow-md hover:bg-red-700 transition duration-200"
          >
            Exit Fullscreen
          </button>
        )}

        {/* PDF Viewer */}
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.9.179/build/pdf.worker.min.js">
          <Viewer
            fileUrl="/pdf/Ben-Ryan-Rinconada-WebDeveloper.pdf"
            defaultScale={scale}
          />
        </Worker>
      </div>

      {/* Download Button */}
      <a
        href="/pdf/my-resume.pdf"
        download
        className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200"
      >
        Download PDF
      </a>
    </div>
  );
};

export default MyResume;

//  <div className="h-screen bg-[#020617] flex justify-center items-center p-">
//  <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.9.179/build/pdf.worker.min.js">
//     <div className="w-full max-w-screen-xl h-[90vh] rounded-xl overflow-hidden shadow-xl bg-white p-2">
//       <Viewer fileUrl="/pdf/my-resume.pdf" />
//     </div>
//   </Worker>
// </div>
