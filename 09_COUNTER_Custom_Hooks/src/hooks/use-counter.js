// A custom hook is just a function
// that can return something, as usual
// But it allows also to use states
// you must just start the name with 'use' an import it where needed

// you can pass arguments as usual in order to customize your hook
// in this case is just a true or false (default true)
// to choose between forward and backward counter
import { useState, useEffect } from "react";

const useCounter = (forward = 1) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (forward) {
        setCounter((prevCounter) => prevCounter + forward);
      } else {
        setCounter((prevCounter) => prevCounter - 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [forward]);

  return counter;
};

export default useCounter;
