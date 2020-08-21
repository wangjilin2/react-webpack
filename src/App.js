import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Login from "./pages/login/login.js";
import Home from "./pages/home/home.js";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/admin" component={Home} />
        </Switch>
      </Router>
    );
  }
}
export default App;
