import React, {PropsWithChildren} from "react";
import {ReactQueryDevtools} from "react-query-devtools";
import {BrowserRouter} from "react-router-dom"
import {QueryCache, ReactQueryCacheProvider} from "react-query";
import {createMuiTheme, CssBaseline, ThemeProvider} from "@material-ui/core";

const queryCache = new QueryCache({
    defaultConfig: {
        queries: {
            suspense: true
        }
    }
})

const theme = createMuiTheme({
    palette: {
        type: "dark"
    },
});

export function ProviderComponent(props: PropsWithChildren<any>) {
    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <ReactQueryCacheProvider queryCache={queryCache}>
                    <CssBaseline/>
                    {props.children}
                    <ReactQueryDevtools initialIsOpen/>
                </ReactQueryCacheProvider>
            </BrowserRouter>
        </ThemeProvider>
    )
}
