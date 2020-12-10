import React from "react";
// import {HomeComponent} from "./home/Home.component";;
import {ClientFormComponent} from "./clients/Form/ClientForm.component";
import {Redirect, Route, Switch} from "react-router-dom";
import {ClientsIndexComponent} from "./clients/index/ClientsIndex.component";
import {ClientsShowComponent} from "./clients/show/ClientsShow.component";

export function RouterComponent() {
    return (
        <Switch>
            <Route path="/clients/store">
                <ClientFormComponent isEditing={false}/>
            </Route>
            <Route path="/clients/:clientId/edit">
                <ClientFormComponent isEditing={true}/>
            </Route>
            <Route path="/clients/:clientId/show">
                <ClientsShowComponent/>
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
