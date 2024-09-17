import { useState } from "react";
import { FaSearchPlus, FaSearchMinus } from "react-icons/fa";

export default function Visualizer({ uploadedImage }) {
  const [zoom, setZoom] = useState(1);
  const [history, setHistory] = useState([]); // For undo/redo functionality
  // const [redoList, setRedoList] = useState([]); // For redo functionality

  // Zoom in functionality
  const zoomIn = () => {
    setHistory([...history, zoom]); // Store current zoom in history for undo
    setZoom((prevZoom) => Math.min(prevZoom + 0.2, 2)); // Max zoom 2x
  };

  // Zoom out functionality
  const zoomOut = () => {
    setHistory([...history, zoom]); // Store current zoom in history for undo
    setZoom((prevZoom) => Math.max(prevZoom - 0.2, 1)); // Min zoom 1x
  };

  // Undo functionality
  // const undo = () => {
  //   if (history.length > 0) {
  //     const lastZoom = history.pop(); // Get the last zoom from history
  //     setRedoList([...redoList, zoom]); // Save current zoom in redo list
  //     setZoom(lastZoom);
  //     setHistory(history); // Update history after undo
  //   }
  // };

  // Redo functionality
  // const redo = () => {
  //   if (redoList.length > 0) {
  //     const redoZoom = redoList.pop(); // Get the last zoom from redo list
  //     setHistory([...history, zoom]); // Save current zoom to history
  //     setZoom(redoZoom);
  //     setRedoList(redoList); // Update redo list after redo
  //   }
  // };

  return (
    <div className="w-full md:w-2/3 rounded-lg p-4">
      <div className="relative w-full aspect-video bg-gray-200">
        {/* Display the uploaded image only if both image and title are available */}
        {uploadedImage && uploadedImage.image && uploadedImage.title ? (
          <div className="relative">
            {/* Image */}
            <img
              src={uploadedImage.image}
              alt={uploadedImage.title}
              style={{ transform: `scale(${zoom})` }}
              className="w-full h-full object-cover transition-transform duration-300"
            />

            {/* Title overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <h2 className="text-white text-2xl font-bold">
                {uploadedImage.title}
              </h2>
            </div>
          </div>
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-500">
            No Image Uploaded
          </div>
        )}

        {/* Button overlay at the bottom of the image */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2 sm:space-x-4">
          {/* <button
            className="flex items-center px-2 py-1 sm:px-4 sm:py-2 bg-gray-300 hover:bg-gray-400 text-black font-semibold rounded"
            onClick={undo}
          >
            <FaUndo className="mr-1 sm:mr-2" /> UNDO
          </button> */}
          {/* <button
            className="flex items-center px-2 py-1 sm:px-4 sm:py-2 bg-gray-300 hover:bg-gray-400 text-black font-semibold rounded"
            onClick={redo}
          >
            <FaRedo className="mr-1 sm:mr-2" /> REDO
          </button> */}
          <button
            className="flex items-center px-2 py-1 sm:px-4 sm:py-2 bg-gray-300 hover:bg-gray-400 text-black font-semibold rounded"
            onClick={zoomIn}
          >
            <FaSearchPlus className="mr-1 sm:mr-2" /> ZOOM IN
          </button>
          <button
            className="flex items-center px-2 py-1 sm:px-4 sm:py-2 bg-gray-300 hover:bg-gray-400 text-black font-semibold rounded"
            onClick={zoomOut}
          >
            <FaSearchMinus className="mr-1 sm:mr-2" /> ZOOM OUT
          </button>
        </div>
      </div>
    </div>
  );
}
