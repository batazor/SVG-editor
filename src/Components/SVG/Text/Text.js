import React, { Component, PropTypes } from 'react';

class Text extends Component {
  render() {
    return (
      <text
        x={this.props.x}
        y={this.props.y}
        stroke={this.props.stroke}
      >
        {this.props.value}
      </text>
    );
  }
}

Text.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  value: PropTypes.string.isRequired,
  stroke: PropTypes.string,
};

export default Text;
