import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Login, Register, Newsfeed } from "./pages";
import { useHistory } from "react-router-dom";

function App() {
  const history = useHistory();

  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Newsfeed} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </Switch>
    </Router>
  );
}

export default App;
