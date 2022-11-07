import React from 'react';
import ReactDOM from 'react-dom/client';
import CssBaseline from '@material-ui/core/CssBaseline';
import {GlobalProvider} from "./global/GlobalProvider";
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CssBaseline />
    <GlobalProvider>
      <App />
    </GlobalProvider>
  </React.StrictMode>
);