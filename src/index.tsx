import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

// CounterProvider example
import { CounterProvider } from './context/CounterContext';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Router>
      <CounterProvider>
      <App />
      </CounterProvider>
    </Router>
  </React.StrictMode>
);
