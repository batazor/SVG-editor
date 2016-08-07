import React, { Component, PropTypes } from 'react'; // eslint-disable-line

class Circle extends Component { // eslint-disable-line

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
