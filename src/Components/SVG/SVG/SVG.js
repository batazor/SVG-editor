import React, { Component, PropTypes } from 'react';

class SVG extends Component {
  render() {
    return (
      <svg
        width={this.props.width}
        viewBox={this.props.viewBox}
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        {this.props.children}
      </svg>
    );
  }
}

SVG.propTypes = {
  width: PropTypes.string.isRequired,
  viewBox: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default SVG;
