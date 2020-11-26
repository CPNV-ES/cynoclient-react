import React from "react";
import {Route, Switch} from "react-router-dom";
import {HomeComponent} from "./home/Home.component";
import {ClientsDetailComponent} from "./clients/detail/ClientsDetail.component";

export function RouterComponent() {
    return (
        <Switch>
            <Route path="/clients/:clientId/detail">
                <ClientsDetailComponent/>
            </Route>
            <Route path="/">
                <HomeComponent/>
            </Route>
        </Switch>
    )
}
