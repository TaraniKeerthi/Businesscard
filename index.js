import React from 'react';
import ReactDOM from "react-dom";
import './style.css';
import App from './app';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </div>
);