// A custom hook is just a function
// that can return something, as usual
// But it allows also to use states
// you must just start the name with 'use' an import it where needed

// you can pass arguments as usual in order to customize your hook
// in this case is just a true or false (default true)
// to choose between forwards and backwards counter
import { useState, useEffect } from "react";

const useCounter = (forwards = 1) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (forwards) {
        setCounter((prevCounter) => prevCounter + forwards);
      } else {
        setCounter((prevCounter) => prevCounter - 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [forwards]);

  return counter;
};

export default useCounter;
