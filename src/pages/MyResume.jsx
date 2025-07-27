import React, { useRef, useState, useEffect } from "react";
import { Worker, Viewer, SpecialZoomLevel } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "../assets/resume-css/index.css";

import { FileDown, Minimize } from "lucide-react";

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
          setScale(0.5);
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
    <div id="resume" className="h-full bg-[#020617] flex flex-col justify-center items-center gap-4 pt-6 mt-20">
      <div
        ref={viewerRef}
        className={`relative inset-0 w-full lg:w-[60%] py-5 rounded-xl overflow-hidden shadow-xl bg-white flex flex-row justify-center items-center text-center pt-6 ${
          isFullscreen
            ? "flex justify-center items-center h-screen pt-[140px] md:pt-8 w-screen py-10  bg-red-600"
            : ""
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

              // 🛠 Force scale reset (simulating your fullscreen change handler)
              const width = window.innerWidth;
              if (width >= 1024) {
                setScale(1.3); // ✅ Apply only for desktops
              } else if (width >= 640) {
                setScale(1.0); // Tablet fallback
              } else {
                setScale(0.5); // Mobile fallback
              }

              setIsFullscreen(false); // Also update local state immediately
            }}
            className="absolute bottom-4 right-4 z-50 px-3 py-2 bg-purple-600 text-white rounded-md shadow-md hover:bg-purple-700 transition duration-200 flex justify-center items-center gap-1"
          >
            Exit <Minimize />
          </button>
        )}

        {/* PDF Viewer */}
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.9.179/build/pdf.worker.min.js">
          <Viewer
            key={scale} // 🔁 forces re-mount when scale changes
            fileUrl="/pdf/Ben-Ryan-Rinconada-WebDeveloper.pdf"
            defaultScale={
              isFullscreen
                ? window.innerWidth >= 1024
                  ? 1.3 // ✅ Lock to 1.0 scale on desktops in fullscreen
                  : scale // 🪶 Let scale adjust normally for smaller screens
                : scale // 🔄 Use responsive scale when not fullscreen
            }
          />
        </Worker>
      </div>

      {/* Download Button */}
      <a
        href="/pdf/Ben-Ryan-Rinconada-WebDeveloper.pdf"
        download
        className="px-4 py-2 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors duration-200 flex gap-1"
      >
        Download My Resume <FileDown />
      </a>
    </div>
  );
};

export default MyResume;
