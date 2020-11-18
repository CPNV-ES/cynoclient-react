import {Button} from '@material-ui/core';
import React from 'react';
import {NavigationComponent} from './navigation/Navigation.component';
import {useCounter} from "./common/hook/Counter.hook";

export function AppComponent() {
  const {counter, setCounter} = useCounter(0)

  return (
    <div>
      <NavigationComponent/>
      <div>
        <p>Count: {counter}</p>
        <Button variant="contained" color="primary" onClick={() => setCounter(counter + 1)}>
          Increment
        </Button>
      </div>
    </div>
  );
}
