import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import 'unsemantic/assets/stylesheets/unsemantic-grid-responsive.css';

import Deckbuilder from './views/Deckbuilder';
import './index.css';

//
// Setup 1 - react-tap-event-plugin
//
injectTapEventPlugin();

ReactDOM.render(
  <MuiThemeProvider>
    <Deckbuilder />
  </MuiThemeProvider>,
  document.getElementById('root')
);
