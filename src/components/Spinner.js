import React, { useState } from "react";
import "../index.css";
import media1 from "./images/media1.png"
import media2 from "./images/media2.png"
import media3 from "./images/media3.png"

const Spinner = () => {
  const [isRotated, setIsRotated] = useState(false)
  const handelClick = () => {
    setIsRotated(!isRotated)
  };
  return (
    <div className="spinner">
      <div
        className={"toggle" + (isRotated ? " rotated" : "")}
        onClick={handelClick}
      >
        +
      </div>
      <ul>
        <li className={isRotated ? "active1" : ""} alt="icons">
          <img src={media1} />
        </li>
        <li className={isRotated ? "active2" : ""} alt="icons">
          <img src={media2} />
        </li>
        <li className={isRotated ? "active3" : ""} alt="icons">
          <img src={media3} />
        </li>
      </ul>
    </div>
  );
};

export default Spinner;
