import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import App from './App';
import DataProvider from './providers/DataProvider';

ReactDOM.render(
  <React.StrictMode>
    <DataProvider>
    <BrowserRouter >
    <App />
    </BrowserRouter>
    </DataProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
