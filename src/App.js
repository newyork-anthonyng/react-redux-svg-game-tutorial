import React, { Component } from 'react';
import PropTypes from "prop-types";
import Canvas from "./components/Canvas";
import { getCanvasPosition } from "./utils/formulas";

class App extends Component {
  componentDidMount() {
    window.setInterval(() => {
      this.props.moveObjects(this.canvasMousePosition);
    }, 10);
  }
  
  trackMouse = (e) => {
    this.canvasMousePosition = getCanvasPosition(e);
  }
  
  render() {
    return (
      <Canvas angle={this.props.angle} trackMouse={this.trackMouse}/>
    );
  }
}

App.propTypes = {
  angle: PropTypes.number.isRequired,
  moveObjects: PropTypes.func.isRequired
}

export default App;
