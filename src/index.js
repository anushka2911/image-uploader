import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { GoogleOAuthProvider } from '@react-oauth/google';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <GoogleOAuthProvider clientId="133835489542-avfcg563v8cblr8kmnpskfje9rfhd2nl.apps.googleusercontent.com">
     <App />
  </GoogleOAuthProvider>
);

