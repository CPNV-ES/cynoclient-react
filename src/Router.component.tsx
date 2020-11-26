import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import {ClientsIndexComponent} from "./clients/index/ClientsIndex.component";

export function RouterComponent() {
    return (
        <Switch>
            <Route path="/clients">
                <ClientsIndexComponent/>
            </Route>
            <Route path="/">
                <Redirect to="/clients"/>
            </Route>
        </Switch>
    )
}
