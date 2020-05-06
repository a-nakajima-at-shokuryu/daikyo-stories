import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import DataProvider from './providers/DataProvider';

ReactDOM.render(
  <React.Fragment>
    <DataProvider>
      <App />
    </DataProvider>
  </React.Fragment>,
  document.getElementById('root')
);
