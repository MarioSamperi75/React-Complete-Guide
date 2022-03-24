import React, { useCallback, useEffect, useState } from "react";

import Tasks from "./components/Tasks/Tasks";
import NewTask from "./components/NewTask/NewTask";
import useHttp from "./components/hooks/use-http";

function App() {
  const [tasks, setTasks] = useState([]);

  // to avoid the infinite loop in use-http.js-sendRequest
  // we have to stop the continous generation of transformTasks(applyData)
  // by using a useCallback
  // but to block the first useHttp argument (the object with url)
  // we have to change the structure in the use-http hook
  // and move as argument in the sendRequest function
  // then it's not anymore an external variable in the useCallback, but internal.

  // setTask never change, all the setState can't change! We need no dependencies!
  const transformTasks = useCallback((taskObj) => {
    const loadedTasks = [];

    for (const taskKey in taskObj) {
      loadedTasks.push({ id: taskKey, text: taskObj[taskKey].text });
    }

    setTasks(loadedTasks);
  }, []);

  // we use the hook and we add the specific trasformation function
  const { isLoading, error, sendRequest: fetchTasks } = useHttp(transformTasks);

  // pay attention to fecthTask as dependency:
  // fetchTasks, as all the functions, is generated for every re-rendering -> infinite loop!
  // we must be stop the fetchTasks generation by using an useCallback in use-http.js

  // we pass the url as argument because we moved the request config as argument in sendRequests (use-http.js)
  useEffect(() => {
    fetchTasks({
      url: "https://react-http-7b575-default-rtdb.europe-west1.firebasedatabase.app/tasks.json",
    });
  }, [fetchTasks]);

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </React.Fragment>
  );
}

export default App;
