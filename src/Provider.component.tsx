import React, {PropsWithChildren, Suspense} from "react";
import {ReactQueryDevtools} from "react-query-devtools";
import {BrowserRouter} from "react-router-dom"
import {QueryCache, ReactQueryCacheProvider} from "react-query";
import {LoaderComponent} from "./common/component/Loader.component";

const queryCache = new QueryCache({
    defaultConfig: {
        queries: {
            suspense: true
        }
    }
})

export function ProviderComponent(props: PropsWithChildren<any>) {
    return (
        <BrowserRouter>
            <ReactQueryCacheProvider queryCache={queryCache}>
                <Suspense fallback={<LoaderComponent/>}>
                    {props.children}
                </Suspense>
                <ReactQueryDevtools initialIsOpen/>
            </ReactQueryCacheProvider>
        </BrowserRouter>
    )
}
