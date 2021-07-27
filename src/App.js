import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Login, Register, Newsfeed } from "./pages";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Newsfeed} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </Switch>
    </Router>
  );
}

export default App;
