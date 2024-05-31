import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/reset.css';
import OnBoarding from './components/OnBoarding';
import Finish from './components/Finish';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <OnBoarding />
  </React.StrictMode>,
);
