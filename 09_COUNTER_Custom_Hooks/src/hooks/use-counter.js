// A custom hook is just a function
// that can return something, as usual
// But it allows also to use states
// you must just start the name with 'use' an import it where needed
import { useState, useEffect } from "react";

const useCounter = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => prevCounter + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return counter;
};

export default useCounter;
