import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux'
import store from './redux/store'
import {BrowserRouter as Router} from "react-router-dom";

import App from './App';
import {GlobalStyle} from "./AppStyle";
import GlobalFonts from "./assets/fonts/fonts";

ReactDOM.render(
  <Provider store={store}>
      <Router>
          <GlobalStyle />
          <GlobalFonts/>
          <App />
      </Router>
  </Provider>,
  document.getElementById('root')
);


