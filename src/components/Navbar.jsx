import { useState } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
  FaEnvelope,
} from "react-icons/fa";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [tooltip, setTooltip] = useState("");

  const handleMouseEnter = (platform) => {
    setTooltip(platform);
  };

  const handleMouseLeave = () => {
    setTooltip("");
  };

  return (
    <nav className="bg-white shadow-md relative">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <img src={logo} alt="First Class Flooring" className="h-16" />
        <div className="flex space-x-4">
          <button className="px-3 py-1 text-sm font-medium text-gray-600 hover:text-gray-800 hover:font-bold hover:underline transition duration-300 ease-in-out">
            NEW SCENE
          </button>
          <button className="px-3 py-1 text-sm font-medium text-gray-600 hover:text-gray-800 hover:font-bold hover:underline transition duration-300 ease-in-out">
            SAVE
          </button>
          <button className="px-3 py-1 text-sm font-medium text-gray-600 hover:text-gray-800 hover:font-bold hover:underline transition duration-300 ease-in-out">
            MY PROJECTS
          </button>
          <button className="px-3 py-1 text-sm font-medium text-gray-600 hover:text-gray-800 hover:font-bold hover:underline transition duration-300 ease-in-out">
            UPLOAD PHOTO
          </button>
          <button className="px-3 py-1 text-sm font-medium text-gray-600 hover:text-gray-800 hover:font-bold hover:underline transition duration-300 ease-in-out">
            PRINT
          </button>
          <button className="px-3 py-1 text-sm font-medium text-gray-600 hover:text-gray-800 hover:font-bold hover:underline transition duration-300 ease-in-out">
            FEEDBACK
          </button>
        </div>
        <div className="flex space-x-2">
          <div
            onMouseEnter={() => handleMouseEnter("Facebook")}
            onMouseLeave={handleMouseLeave}
            className="relative"
          >
            <FaFacebookF className="text-gray-600 hover:text-gray-800" />
          </div>
          <div
            onMouseEnter={() => handleMouseEnter("Twitter")}
            onMouseLeave={handleMouseLeave}
            className="relative"
          >
            <FaTwitter className="text-gray-600 hover:text-gray-800" />
          </div>
          <div
            onMouseEnter={() => handleMouseEnter("Pinterest")}
            onMouseLeave={handleMouseLeave}
            className="relative"
          >
            <FaPinterestP className="text-gray-600 hover:text-gray-800" />
          </div>
          <div
            onMouseEnter={() => handleMouseEnter("Email")}
            onMouseLeave={handleMouseLeave}
            className="relative"
          >
            <FaEnvelope className="text-gray-600 hover:text-gray-800" />
          </div>
        </div>
      </div>
      {tooltip && (
        <div className="absolute bg-gray-800 text-white text-sm rounded px-2 py-1 bottom-12 right-0">
          {tooltip}
        </div>
      )}
    </nav>
  );
}
