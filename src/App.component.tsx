import React, {Suspense} from 'react';
import {NavigationComponent} from './navigation/Navigation.component';
import {ProviderComponent} from "./Provider.component";
import {RouterComponent} from "./Router.component";
import {LoaderComponent} from "./common/component/Loader.component";

export function AppComponent() {
    return (
        <ProviderComponent>
            <div>
                <NavigationComponent/>
                <Suspense fallback={<LoaderComponent/>}>
                    <div>
                        <RouterComponent/>
                    </div>
                </Suspense>
            </div>
        </ProviderComponent>
    );
}
