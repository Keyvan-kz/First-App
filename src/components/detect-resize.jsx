import { useEffect, useState } from "react";

function Resize() {
  const [height, setHeight] = useState(window.innerHeight);
  const [width, setWidth] = useState(window.innerWidth);

  function detectResizeHeight() {
    window.addEventListener("resize", () => setHeight(window.innerHeight));
    return () => window.removeEventListener("resize", detectResizeHeight);
  }

  function detectResizeWidth() {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
    return () => window.removeEventListener("resize", detectResizeWidth);
  }

  useEffect(detectResizeWidth, [width]);
  useEffect(detectResizeHeight, [height]);

  return (
    <div className="m-5 bg-orange-300 p-5 w-50 rounded text-center shadow-lg shadow-gray-800">
      <h1>Height of Window</h1>
      <p>{height}</p>
      <h1>Width of Window</h1>
      <p>{width}</p>
    </div>
  );
}

export default Resize;
