import React, {PropsWithChildren} from "react";
import {BrowserRouter} from "react-router-dom"

export function ProviderComponent(props: PropsWithChildren<any>) {
  return (
    <BrowserRouter>
      {props.children}
    </BrowserRouter>
  )
}
