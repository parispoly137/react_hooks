import React from 'react';
import ReactDOM from 'react-dom';
import App from "./hooks/useTitle"; // Fix it!

import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);