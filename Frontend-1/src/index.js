import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import LoginStore from './contexts/LoginStore';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <LoginStore>
    <App />
  </LoginStore>
);

reportWebVitals();
