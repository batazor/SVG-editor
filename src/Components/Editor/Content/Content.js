import React, { Component } from 'react';

import { SVG } from '../../SVG';
import Button from '../../Button';

import DEMO from '../../../demo';

class Content extends Component {
  clickButton() {
    console.log('Click on button!!!');
  }

  render() {
    console.log(DEMO.box);

    return (
      <div>
        CONTENT

        <SVG
          width={"100%"}
          viewBox={"0 0 1000 1000"}
        >
          {
            DEMO.box.map((e, i) => <Button
              key={i}
              x={e.button.x}
              y={e.button.y}
              value={e.button.value}
              onClick={this.clickButton}
            />)
          }
        </SVG>
      </div>
    );
  }
}

export default Content;
