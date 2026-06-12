import Circle from "./Circle";
import Square from "./Square";

const GeoForm = () => {
  return (
    <>
      <div className="flex border-2 border-black gap-4 p-4 bg-black">
        <Square />
        <Circle />
      </div>
    </>
  );
};

export default GeoForm;
