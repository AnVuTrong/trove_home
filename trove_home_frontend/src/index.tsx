import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// Import i18n config
import './i18n/i18n.config';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<App />);