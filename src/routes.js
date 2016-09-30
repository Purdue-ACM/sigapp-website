import React from 'react';
import Home from './components/Home';
import TutorialContainer from './containers/TutorialContainer';

const routes = [
  {path: '/', action: () => <Home />},
  {path: '/tutorials', action: () => <TutorialContainer />}
];

export default routes;
