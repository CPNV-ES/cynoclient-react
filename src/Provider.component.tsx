import React, {PropsWithChildren} from "react";
import {ReactQueryDevtools} from "react-query-devtools";
import {BrowserRouter} from "react-router-dom"
import {QueryCache, ReactQueryCacheProvider} from "react-query";

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
        {props.children}
        <ReactQueryDevtools initialIsOpen/>
      </ReactQueryCacheProvider>
    </BrowserRouter>
  )
}
