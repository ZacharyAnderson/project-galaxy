import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

const routing = (
  <Router>
    <div>
      <Route path="/" component={App} />
    </div>
  </Router>
);


ReactDOM.render(
  routing,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
