import React from 'react';
import {NavigationComponent} from './navigation/Navigation.component';
import {ProviderComponent} from "./Provider.component";
import {RouterComponent} from "./Router.component";

export function AppComponent() {
    return (
        <ProviderComponent>
            <div>
                <NavigationComponent/>
                <div>
                    <RouterComponent/>
                </div>
            </div>
        </ProviderComponent>
    );
}
