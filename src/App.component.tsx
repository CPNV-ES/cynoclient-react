import {Button} from '@material-ui/core';
import React, {useState} from 'react';
import {NavigationComponent} from './navigation/Navigation.component';

export function AppComponent() {
  const [counter, setCounter] = useState(0)

  return (
    <div>
      <NavigationComponent />
      <div>
        <p>Count: {counter}</p>
        <Button variant="contained" color="primary" onClick={() => setCounter(counter + 1)}>
          Increment
        </Button>
      </div>
    </div>
  );
}
