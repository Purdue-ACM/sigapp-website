import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import router from './router';
import routes from './routes'
import history from './history';
import './index.css';

function renderComponent(component, container) {
  ReactDOM.render(component, container);
}

function render(location) {
  router.resolve(routes, location) 
    .then(renderComponent)
    .catch(error => router.resolve(routes, {...location, error}));
    .then(renderComponent);
}

render(history.getCurrentLocation())
history.listen(render);
