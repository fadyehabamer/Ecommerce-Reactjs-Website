import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom'
import { ProductProvider } from './Context'

ReactDOM.render(


  <ProductProvider>
    <Router>
      <App />
    </Router>
  </ProductProvider>,

  document.getElementById('root')
);

reportWebVitals();
