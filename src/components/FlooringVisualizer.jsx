import Navbar from "./Navbar.jsx";
import Visualizer from "./Visualizer";
import FloorSelector from "./FloorSelector";

export default function FlooringVisualizer() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row gap-8">
        <Visualizer />
        <FloorSelector />
      </div>
    </div>
  );
}
