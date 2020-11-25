import React from "react";
import {Route, Switch} from "react-router-dom";
import {HomeComponent} from "./home/Home.component";
import {FormComponent} from "./client/Form.component"

export function RouterComponent() {
    return (
        <Switch>
            <Route path="/client/create">
                <FormComponent/>
            </Route>
            <Route path="/client">
                <FormComponent/>
            </Route>
            <Route path="/">
                <HomeComponent/>
            </Route>
        </Switch>
    )
}
