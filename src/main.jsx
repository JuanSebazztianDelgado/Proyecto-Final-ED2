// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/globals.scss';
import { AuthProvider } from './context/AuthContext';
import { ReviewProvider } from './context/ReviewContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <ReviewProvider>
        <App />
      </ReviewProvider>
    </AuthProvider>
  </React.StrictMode>
);
