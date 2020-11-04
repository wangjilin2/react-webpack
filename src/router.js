import React, { Component } from "react";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";

import App from "./App";

import Hooks from "./pages/hooks/hooks";
import Reducer from "./pages/useReducer/index";
import TreeDemo from "./pages/tree";
import Main from "./pages/main/main";
import Category from "./pages/category/category";
import Bar from "./pages/charts/bar";
import Line from "./pages/charts/line";
import Pie from "./pages/charts/pie";
import Product from "./pages/product/product";
import Role from "./pages/role/role";
import User from "./pages/user/user";
import NoMatch from "./pages/noMatch/noMatch";

class router extends Component {
  render() {
    return (
      <Router>
        <App>
          
            <Route path="/login" component={Login} />
            <Route
              path="/home"
              render={() => (
                <Home>
                  <Switch>
                    <Route path="/home/main" component={Main} />
                    <Route
                  
                      path="/home/products/category"
                      component={Category}
                    />
                    <Route path="/home/charts/bar" component={Bar} />
                    <Route path="/home/charts/line" component={Line} />
                    <Route path="/home/charts/pie" component={Pie} />
                    <Route path="/home/products/product" component={Product} />
                    <Route path="/home/role" component={Role} />
                    <Route path="/home/user" component={User} />
                    <Route component={NoMatch} />
                    {/* <Redirect to="/home/main" /> */}
                    
                  </Switch>
                </Home>
              )}
            />
        </App>
      </Router>
    );
  }
}

export default router;
