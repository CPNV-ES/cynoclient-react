import React from "react";
import {Route, Switch} from "react-router-dom";
import {HomeComponent} from "./home/Home.component";

export function RouterComponent() {
  return (
    <Switch>
      <Route path="/">
        <HomeComponent/>
      </Route>
    </Switch>
  )
}
