import React from "react";
import { Route, Switch } from "react-router-dom";

// custom screens
import Home from "../containers/Home";
import Profile from "../containers/Profile";

const Routes = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/profile/:id" exact component={Profile} />
      </Switch>
    </>
  );
};

export default Routes;