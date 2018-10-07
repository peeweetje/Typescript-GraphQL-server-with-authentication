import * as React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Login } from "./modules/user/Login";
import { Register } from "./modules/user/Register";
import TestView from "./modules/user/TestView";

export class Routes extends React.PureComponent {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/testview" component={TestView} />
        </Switch>
      </BrowserRouter>
    );
  }
}
