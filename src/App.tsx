import {Button} from '@material-ui/core';
import React, {useState} from 'react';

export function App() {
  const [counter, setCounter] = useState(0)

  return (
    <div>
      <p>Count: {counter}</p>
      <Button variant="contained" color="primary" onClick={() => setCounter(counter + 1)}>
        Increment
      </Button>
    </div>
  );
}
