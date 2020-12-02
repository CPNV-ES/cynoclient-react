import React from "react";
// import {HomeComponent} from "./home/Home.component";;
import {FormComponent} from "./clients/Form.component";
import {Redirect, Route, Switch} from "react-router-dom";
import {ClientsIndexComponent} from "./clients/index/ClientsIndex.component";

export function RouterComponent() {
    return (
        <Switch>
            <Route path="/clients/store">
                <FormComponent/>
            </Route>
            <Route path="/clients/:clientId/edit">
                <FormComponent/>
            </Route>
            <Route path="/clients">
                <ClientsIndexComponent/>
            </Route>
            <Route path="/">
                <Redirect to="/clients"/>
            </Route>
        </Switch>
    )
}
