import React from "react";
import {Route, Switch} from "react-router-dom";
import {HomeComponent} from "./home/Home.component";
import {ClientsIndexComponent} from "./clients/ClientsIndex.component";

export function RouterComponent() {
    return (
        <Switch>
            <Route path="/clients">
                <ClientsIndexComponent/>
            </Route>
            <Route path="/">
                <HomeComponent/>
            </Route>
        </Switch>
    )
}
