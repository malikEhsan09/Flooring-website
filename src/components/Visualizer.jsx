import { useState } from "react";
import { FaUndo, FaRedo, FaSearchPlus, FaSearchMinus } from "react-icons/fa";
// import { IoMdSync } from "react-icons/io"; // For the Rotate Preview icon
import roomPic from "../assets/roomPic.jpg"; // Update this with the correct image path

export default function Visualizer() {
  const [zoom, setZoom] = useState(1);
  // const [rotation, setRotation] = useState(0);

  // Zoom in functionality
  const zoomIn = () => {
    setZoom((prevZoom) => Math.min(prevZoom + 0.2, 2)); // Max zoom 2x
  };

  // Zoom out functionality
  const zoomOut = () => {
    setZoom((prevZoom) => Math.max(prevZoom - 0.2, 1)); // Min zoom 1x
  };

  // Undo functionality placeholder
  const undo = () => {
    console.log("Undo action");
    // Add your undo functionality here
  };

  // Redo functionality placeholder
  const redo = () => {
    console.log("Redo action");
    // Add your redo functionality here
  };

  // Rotate functionality
  // const rotate = () => {
  //   setRotation((prevRotation) => prevRotation + 90);
  // };

  return (
    <div className="w-full md:w-2/3 rounded-lg p-4">
      <div className="relative w-full aspect-video bg-gray-200">
        {/* Image with zoom and rotation functionality */}
        <img
          src={roomPic}
          alt="Room Visualization"
          style={{ transform: `scale(${zoom}) ` }}
          className="w-full h-full object-cover transition-transform duration-300"
        />

        {/* Rotate Preview Button */}
        {/* <button
          onClick={rotate}
          className="absolute top-4 left-4 bg-gray-300 hover:bg-gray-400 text-black font-semibold px-4 py-2 rounded flex items-center shadow-md"
        >
          <IoMdSync className="mr-2" /> ROTATE PREVIEW
        </button> */}

        {/* Button overlay at the bottom of the image */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-4">
          <button
            className="flex items-center px-4 py-2 bg-gray-300 hover:bg-gray-400 text-black font-semibold rounded"
            onClick={undo}
          >
            <FaUndo className="mr-2" /> UNDO
          </button>
          <button
            className="flex items-center px-4 py-2 bg-gray-300 hover:bg-gray-400 text-black font-semibold rounded"
            onClick={redo}
          >
            <FaRedo className="mr-2" /> REDO
          </button>
          <button
            className="flex items-center px-4 py-2 bg-gray-300 hover:bg-gray-400 text-black font-semibold rounded"
            onClick={zoomIn}
          >
            <FaSearchPlus className="mr-2" /> ZOOM IN
          </button>
          <button
            className="flex items-center px-4 py-2 bg-gray-300 hover:bg-gray-400 text-black font-semibold rounded"
            onClick={zoomOut}
          >
            <FaSearchMinus className="mr-2" /> ZOOM OUT
          </button>
        </div>
      </div>
    </div>
  );
}
