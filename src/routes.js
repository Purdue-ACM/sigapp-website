import React from 'react';
import App from './App';
import Home from './components/Home'

const routes = [
  {path: '/', action: () => <App />},
  {path: '/tutorials', action: () => <Home />}
];

export default routes;
