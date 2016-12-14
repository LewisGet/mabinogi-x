import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Home from './views/Home/Home';
import './index.css';

//
// Setup 1 - react-tap-event-plugin
//
injectTapEventPlugin();

ReactDOM.render(
  <MuiThemeProvider>
    <Home />
  </MuiThemeProvider>,
  document.getElementById('root')
);
