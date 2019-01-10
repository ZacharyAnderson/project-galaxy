import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import ToolCenter from "../src/components/ToolCenter";
import App from "./App";
import LogInPage from "./components/LogInPage";
import SignUp from "./components/SignUp";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";
import configureStore from "./store/configureStore";

const store = configureStore();

const routing = (
  <Provider store={store}>
    <Router>
      <div>
        <Route path="/" component={App} />
        <Route path="/tool-center" component={ToolCenter} />
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={LogInPage} />
      </div>
    </Router>
  </Provider>
);

console.log(store.getState());

ReactDOM.render(routing, document.getElementById("root") as HTMLElement);
registerServiceWorker();
