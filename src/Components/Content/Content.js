import React, { Component, PropTypes } from 'react'; // eslint-disable-line

import Circle from '../Circle';

class Content extends Component { // eslint-disable-line

  render() {
    return (
      <div>
        ASIDE

        <svg
          width="100%"
          viewBox="0 0 1000 1000"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <Circle
            cx={10}
            cy={10}
            r={5}
          />
        </svg>
      </div>
    );
  }
}

export default Content;
