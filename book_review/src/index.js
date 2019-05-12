import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { GlobalStyle } from './style';

ReactDOM.render(
  <React.Fragment><GlobalStyle /><App /></React.Fragment>, 
  //<App />,  
  document.getElementById('root')
);

