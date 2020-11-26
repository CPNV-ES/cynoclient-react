import React from "react";
import {Route, Switch} from "react-router-dom";
import {HomeComponent} from "./home/Home.component";
import {FormComponent} from "./client/Form.component"

export function RouterComponent() {
    return (
        <Switch>
            <Route path="/clients/store">
                <FormComponent/>
            </Route>
            <Route path="/clients/:clientId/edit">
                <FormComponent/>
            </Route>
            <Route path="/">
                <HomeComponent/>
            </Route>
        </Switch>
    )
}
