import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  useLocation,
  Route
} from "react-router-dom";
import { useHistory } from "react-router-dom";
import Aux from "./hoc/Auxiliary/Auxiliary.js";
import PrivateRoute from "./hoc/PrivateRoute/PrivateRoute";
import AuthRoute from "./hoc/AuthRoute/AuthRoute";
import Dashboard from "./containers/Dashboard/Dashboard";
import NotFoundPage from "./containers/NotFoundPage/NotFoundPage";
import AuthPage from "./containers/AuthPage/AuthPage";
import Villages from "./containers/Villages/Villages";
import Shgs from "./containers/Shgs/Shgs";
import Pgs from "./containers/Pgs/Pgs";
import PgPage from "./containers/Pgs/PgPage";
import VillagePage from "./containers/Villages/VillagePage";
import Vopage from "./containers/Vo/Vopage";
import Vos from "./containers/Vo/Vos";
import Account from "./containers/Account/Account";

function Routes() {
  return (
    <Aux>
      <Router>
        <div>
          <Switch>
            <PrivateRoute path="/" component={Dashboard} exact />
            <PrivateRoute path="/villages/add" component={VillagePage} exact />
            <PrivateRoute
              path="/villages/edit/:id"
              component={VillagePage}
              exact
            />
            <PrivateRoute
              path="/village-organizations/add"
              component={Vopage}
              exact
            />
            <PrivateRoute
              path="/village-organizations/edit/:id"
              component={Vopage}
              exact
            />
            <PrivateRoute path="/village-organizations" component={Vos} exact />
            <PrivateRoute path="/villages" component={Villages} exact />
            <PrivateRoute path="/shgs" component={Shgs} exact />
            <PrivateRoute path="/pgs" component={Pgs} exact />
            <PrivateRoute
              path="/pgs/add"
              component={PgPage}
              exact
            />
            <PrivateRoute
              path="/pgs/edit/:id"
              component={PgPage}
              exact
            />

            <PrivateRoute path="/my-account" component={Account} exact />
            <Route path="/404" component={NotFoundPage} />
            <AuthRoute path="/:authType/:id?" component={AuthPage} />
          </Switch>
        </div>
      </Router>
    </Aux>
  );
}

export default Routes;
