import { BrowserRouter as Router } from "react-router-dom";
import React from 'react';
import ReactDOM from "react-dom"
import './index.css';
import App from './pages/App/App';


ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);


