// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./component/Main";
import DetailMain from "./component/Detail";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/detail-main" exact component={DetailMain} />
      </Switch>
    </Router>
  );
};

export default App;
