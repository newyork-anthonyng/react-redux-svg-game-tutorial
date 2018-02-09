import React from "react";
import Ground from "./Ground";
import Sky from "./Sky";
import CannonBase from "./CannonBase";
import CannonPipe from "./CannonPipe";
import PropTypes from "prop-types";

const Canvas = ({ trackMouse, angle }) => {
  const viewBox = [
    window.innerWidth / -2,
    100 - window.innerHeight,
    window.innerWidth,
    window.innerHeight
  ];

  return (
    <svg
      id="aliens-go-home-canvas"
      preserveAspectRatio="xMaxYMax none"
      onMouseMove={trackMouse}
      viewBox={viewBox}
    >
      <Sky />
      <Ground />
      <CannonPipe rotation={angle} />
      <CannonBase />
    </svg>
  );
};

Canvas.propTypes = {
  angle: PropTypes.number.isRequired,
  trackMouse: PropTypes.func.isRequired
}

export default Canvas;
