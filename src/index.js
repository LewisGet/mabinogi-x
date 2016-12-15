import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Provider } from 'react-redux';
import 'unsemantic/assets/stylesheets/unsemantic-grid-responsive.css';

import store from './store';
import Deckbuilder from './views/Deckbuilder';
import './index.css';

//
// Setup 1 - react-tap-event-plugin
//
injectTapEventPlugin();

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider>
      <Deckbuilder />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
);
