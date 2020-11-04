import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Login from "./pages/login/login.js";
import Home from "./pages/home/home.js";

class App extends React.Component {
  render() {
    return (
    <div>
      <BrowserRouter>
      <Switch>
      <Route path="/login" component={Login} />
      <Route path='/home' component={Home}/>
      </Switch>
      </BrowserRouter>
    </div>
    );
  }
}
export default App;
