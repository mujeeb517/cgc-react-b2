// Entry File
import React from 'react';
import './index.css';
import { createRoot } from 'react-dom/client';
import App from './App';


createRoot(document.getElementById('root'))
    .render(<App />);


// index.html -> main.jsx -> App.jsx