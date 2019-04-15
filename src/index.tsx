import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import { GenericNotFound } from "./components/GenericNotFound";
import { Home } from "./components/Home/component";
import { LogInPage } from "./components/LogInPage/component";
import { Settings } from "./components/Settings/container";
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
          <Route exact={true} path="/settings" component={Settings} />
          <Route exact={true} path="/:current_user/recipe" component={Home} />
          <Route component={GenericNotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
);

console.log(store.getState());

ReactDOM.render(routing, document.getElementById("root") as HTMLElement);
registerServiceWorker();
