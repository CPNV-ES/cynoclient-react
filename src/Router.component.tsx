import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import {ClientsIndexComponent} from "./clients/index/ClientsIndex.component";
import {DogsIndexComponent} from "./dogs/index/DogsIndex.component";

export function RouterComponent() {
    return (
        <Switch>
            <Route path="/clients">
                <ClientsIndexComponent/>
            </Route>
            <Route path="/dogs">
                <DogsIndexComponent/>
            </Route>
            <Route path="/">
                <Redirect to="/clients"/>
            </Route>
        </Switch>
    )
}
