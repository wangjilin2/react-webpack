import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Login from "./pages/login/login.js";
import Home from "./pages/home/home.js";
import Hooks from './pages/hooks/hooks';
import Reducer from './pages/useReducer/index'
import TreeDemo from './pages/tree'

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/login"  component={Login} />
          <Route path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    );
  }
}
export default App;
