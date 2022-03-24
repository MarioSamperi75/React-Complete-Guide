import { useCallback, useState } from "react";

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // useCallback to avoid the sendRequest(fetchTasks) regeneration
  // we moved both requestConfig and applyData as parametes in send request
  // we are not anymore exernal object, can't change
  // and don't generate the infinit loop
  // of course we added them as argument when invoking sendRequest (see app.js - fetchTasks)
  const sendRequest = useCallback(async (requestConfig, applyData) => {
    setIsLoading(true);
    setError(null);
    // we check if there is method, headers, and body
    // it happens only in the case of post requests
    try {
      const response = await fetch(requestConfig.url, {
        method: requestConfig.method ? requestConfig.method : "GET",
        headers: requestConfig.headers ? requestConfig.headers : {},
        body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
      });

      if (!response.ok) {
        throw new Error("Request failed!");
      }

      const data = await response.json();
      // fuction that we get as argument
      // the trasformation of the data is different in get or post requests
      // we delegate the trasformation function to the component that uses this hook
      applyData(data);
    } catch (err) {
      setError(err.message || "Something went wrong!");
    }
    setIsLoading(false);
  }, []);
  // this syntax is the same as isLoading: isLoading, ... and so on
  return {
    isLoading,
    error,
    sendRequest,
  };
};

export default useHttp;
