import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import ToolCenter from '../src/components/ToolCenter';
import App from './App';
import SignUp from './components/SignUp';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

const routing = (
  <Router>
    <div>
      <Route path="/" component={App} />
      <Route path="/tool-center" component={ToolCenter} />
      <Route path="/signup" component={SignUp} />
    </div>
  </Router>
);


ReactDOM.render(
  routing,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
