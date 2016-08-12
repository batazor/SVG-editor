import React, { Component, PropTypes } from 'react';

class Circle extends Component {
  render() {
    return (
      <circle
        cx={this.props.cx}
        cy={this.props.cy}
        r={this.props.r}
      />
    );
  }
}

Circle.propTypes = {
  cx: PropTypes.number.isRequired,
  cy: PropTypes.number.isRequired,
  r: PropTypes.number.isRequired,
};

export default Circle;
