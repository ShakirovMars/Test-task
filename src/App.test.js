import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { CookiesProvider } from 'react-cookie';

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(<CookiesProvider><App />, div </CookiesProvider>);

});
