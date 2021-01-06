import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import {ClientsIndexComponent} from "./clients/index/ClientsIndex.component";
import {ClientsShowComponent} from "./clients/show/ClientsShow.component";
import {DogsIndexComponent} from "./dogs/index/DogsIndex.component";
import {BreedsIndexComponent} from "./breeds/index/BreedsIndex.component";
import {DogShowComponent} from "./dogs/show/DogShow.component";
import {DiseasesIndexComponent} from "./diseases/index/DiseasesIndex.component"
import {DiseaseShowComponent} from "./diseases/show/DiseasesShow.component";

export function RouterComponent() {
    return (
        <Switch>
            <Route path="/clients/:clientId/show">
                <ClientsShowComponent/>
            </Route>
            <Route path="/clients">
                <ClientsIndexComponent/>
            </Route>
            <Route path="/breeds">
                <BreedsIndexComponent/>
            </Route>
            <Route path="/dogs/:dogId">
                <DogShowComponent/>
            </Route>
            <Route path="/dogs">
                <DogsIndexComponent/>
            </Route>
            <Route path="/diseases/:diseaseId/show">
                <DiseaseShowComponent/>
            </Route>
            <Route path="/diseases">
                <DiseasesIndexComponent/>
            </Route>
            <Route path="/">
                <Redirect to="/clients"/>
            </Route>
        </Switch>
    )
}
