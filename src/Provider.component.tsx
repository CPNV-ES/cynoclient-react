import React, {PropsWithChildren} from "react";
import {BrowserRouter} from "react-router-dom"
import {QueryClient, QueryClientProvider} from "react-query";
import {ReactQueryDevtools} from "react-query/devtools";
import {createMuiTheme, CssBaseline, ThemeProvider} from "@material-ui/core";
import {RecoilRoot} from "recoil";

const queryClient = new QueryClient({
    defaultOptions: {
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
            <RecoilRoot>
                <BrowserRouter>
                    <QueryClientProvider client={queryClient}>
                        <CssBaseline/>
                        {props.children}
                        <ReactQueryDevtools initialIsOpen/>
                    </QueryClientProvider>
                </BrowserRouter>
            </RecoilRoot>
        </ThemeProvider>
    )
}
