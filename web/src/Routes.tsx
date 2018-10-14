import * as React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Login } from "./modules/user/Login";
import { Register } from "./modules/user/Register";
import Account from "./modules/account/Account";
import Header from "./shared/Header";

export class Routes extends React.PureComponent {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={Login} />
          <Route
            path="/"
            render={() => (
              <React.Fragment>
                <Header />
                <div>
                  <Route path="/register" component={Register} />
                  <Route path="/account" component={Account} />
                  <Route
                    exact={true}
                    path="/"
                    render={() => <div>homepage</div>}
                  />
                </div>
              </React.Fragment>
            )}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}
