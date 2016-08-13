import React, { Component, PropTypes } from 'react';

class Rect extends Component {
  render() {
    return (
      <rect
        x={this.props.x}
        y={this.props.y}
        width={this.props.width}
        height={this.props.height}
        rx={this.props.rx}
        ry={this.props.ry}
      >
        {this.props.children}
      </rect>
    );
  }
}

Rect.propTypes = {
  x: PropTypes.number,
  y: PropTypes.number,
  width: PropTypes.number,
  height: PropTypes.number,
  rx: PropTypes.number,
  ry: PropTypes.number,

  children: PropTypes.node,
};

export default Rect;
