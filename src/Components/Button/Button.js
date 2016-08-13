import React, { Component, PropTypes } from 'react';

import { G, Rect, Text } from '../SVG';

class Button extends Component {
  render() {
    let widthButton = this.props.value.length * 8;
    let heightButton = 30;
    let yText = this.props.y + (heightButton * 0.5);

    return (
      <G
        onClick={this.props.onClick}
        cursor={"pointer"}
      >
        <Rect
          x={this.props.x}
          y={this.props.y}
          rx={5}
          ry={5}
          width={widthButton}
          height={heightButton}
        />
        <Text
          x={this.props.x}
          y={yText}
          value={this.props.value}
          stroke={"green"}
        />
      </G>
    );
  }
}

Button.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  value: PropTypes.string.isRequired,

  onClick: PropTypes.func,
};

export default Button;
