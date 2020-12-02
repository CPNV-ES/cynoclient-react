import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import {ClientsIndexComponent} from "./clients/index/ClientsIndex.component";
import {DogsIndexComponent} from "./dogs/index/DogsIndex.component";
import {ClientsShowComponent} from "./clients/show/ClientsShow.component";
import {DogShowComponent} from "./dogs/show/DogShow.component";

export function RouterComponent() {
	return (
		<Switch>
			<Route path="/clients/:clientId/show">
				<ClientsShowComponent/>
			</Route>
			<Route path="/clients">
				<ClientsIndexComponent/>
			</Route>
			<Route path="/dogs/:dogId">
				<DogShowComponent/>
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
