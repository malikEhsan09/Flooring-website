import tile1 from "../assets/tile1.webp";
import tile2 from "../assets/tile2.webp";
import tile3 from "../assets/tile3.webp";
import tile4 from "../assets/tile4.jpg";

const floorOptions = [
  {
    name: "American Walnut Natural / Studio / Avenue",
    image: tile1,
  },
  {
    name: "Brushed Acacia 4x3x4 / Avenue",
    image: tile2,
  },
  {
    name: "Brushed Acacia Grayfield / Avenue",
    image: tile3,
  },
  {
    name: "Brushed American Walnut Natural / Avenue",
    image: tile4,
  },
  {
    name: "Brushed Oak Grays Harbor / Avenue",
    image: tile2,
  },
  {
    name: "Brushed Oak Brule / Badlands",
    image: tile1,
  },
];

export default function FloorSelector() {
  return (
    <div className="w-full md:w-1/3 bg-white rounded-lg shadow-md p-4">
      <h2 className="text-xl font-bold mb-4">Floor</h2>
      <div className="mb-4">
        <select className="w-full p-2 border rounded">
          <option>Kentwood Floors</option>
        </select>
      </div>
      <div className="mb-4">
        <select className="w-full p-2 border rounded">
          <option>Product Types</option>
        </select>
      </div>
      <h3 className="text-lg font-semibold mb-2">Kentwood Floors</h3>
      <div className="grid grid-cols-3 gap-4">
        {floorOptions.map((floor, index) => (
          <div key={index} className="text-center">
            <img
              src={floor.image}
              alt={floor.name}
              className="w-full h-24 object-cover mb-2"
            />
            <p className="text-xs">{floor.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
