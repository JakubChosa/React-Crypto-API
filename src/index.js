import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {ContextProvider} from './Context.js'
import App from './App';
import {BrowserRouter as Router} from "react-router-dom";

ReactDOM.render(
  <ContextProvider>
    <Router>
      <App />
    </Router>
  </ContextProvider>,
  document.getElementById('root')
);
