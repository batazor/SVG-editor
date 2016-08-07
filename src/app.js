import React from 'react';
import { render } from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';

import 'normalize.css/normalize.css';
import 'flexboxgrid/css/flexboxgrid.min.css';
import 'react-virtualized/styles.css';
import './app.less';

import Aside from './Components/Aside';
import Content from './Components/Content';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const App = () => (
  <div className="box">
    <div className="row">

      <header className="col-xs-12">
        <div className="box">
          <h1>React SVG-editor</h1>
        </div>
      </header>

      <div className="col-xs-12">
        <div className="box">
          <div className="row">

            <div className="col-xs-3">
              <div className="box">
                <Aside />
              </div>
            </div>

            <div className="col-xs-9">
              <div className="box">
                <Content />
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  </div>
);

render(
  <App />,
  document.getElementById('svgEditor')
);
