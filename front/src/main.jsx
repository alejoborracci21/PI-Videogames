import React from 'react';
import ReactDOM from "react-dom/client";
import App from './App';
import { BrowserRouter } from "react-router-dom";

import reportWebVitals from './reportWebVitals';

const root = document.getElementById('root');

if (root) {
  const rootElement = ReactDOM.createRoot(root);
  rootElement.render(
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  );
}

// Si deseas medir el rendimiento de tu aplicación, puedes usar reportWebVitals.
reportWebVitals();
