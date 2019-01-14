import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import { GenericNotFound } from "./components/GenericNotFound";
import { LogInPage } from "./components/LogInPage/component";
import { SignUp } from "./components/SignUp/container";
import { ToolCenter } from "./components/ToolCenter/component";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";
import configureStore from "./store/configureStore";

const store = configureStore();

const routing = (
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact={true} path="/" component={App} />
          <Route exact={true} path="/tool-center" component={ToolCenter} />
          <Route exact={true} path="/signup" component={SignUp} />
          <Route exact={true} path="/login" component={LogInPage} />
          <Route component={GenericNotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
);

console.log(store.getState());

ReactDOM.render(routing, document.getElementById("root") as HTMLElement);
registerServiceWorker();
