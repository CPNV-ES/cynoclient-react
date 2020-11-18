import {useState} from "react";

export function useCounter(initialValue: number) {
  const [counter, setCounter] = useState(initialValue)

  return {
    counter,
    setCounter
  }
}
