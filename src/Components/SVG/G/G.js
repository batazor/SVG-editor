import React, { Component, PropTypes } from 'react';

class G extends Component {

  startDragElement() {
    console.log('Start draggable element');
  }

  stopDragElement() {
    console.log('Stop draggable element');
  }

  render() {
    return (
      <g
        onMouseUp={this.props.onClick}
        cursor={this.props.cursor}
        stroke={this.props.stroke}
        onMouseDown={this.startDragElement}
        onMouseMove={this.stopDragElement}
      >
        {this.props.children}
      </g>
    );
  }
}

G.propTypes = {
  cursor: PropTypes.string,
  stroke: PropTypes.string,

  onClick: PropTypes.func,

  children: PropTypes.node.isRequired,
};

export default G;
