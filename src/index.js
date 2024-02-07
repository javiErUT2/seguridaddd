import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';

const domain = 'dev-n00mwh7yrpm8l6mt.us.auth0.com';
const clientId = 'ZBKrPh78soWoYsiETeg4LkALX6wgbIBu';

const root = ReactDOM.createRoot(document.getElementById('root')); // Utiliza createRoot aquí

root.render(
  <Auth0Provider
    domain={domain}
    clientId={clientId}
    redirectUri={window.location.origin}
    
  >
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Auth0Provider>
);
