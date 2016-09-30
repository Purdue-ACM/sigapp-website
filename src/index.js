import ReactDOM from 'react-dom';
import router from './router';
import routes from './routes'
import { createBrowserHistory } from 'history';
import './index.css';

const history = createBrowserHistory();

function renderComponent(component) {
  ReactDOM.render(component, document.getElementById('root'));
}

function render(location) {
  router.resolve(routes, location) 
    .then(renderComponent)
    .catch(error => router.resolve(routes, {...location, error})
      .then(renderComponent));

}

render(history.location)
history.listen(render);
