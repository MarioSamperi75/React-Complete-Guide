import React, { useEffect, useState } from "react";

import Tasks from "./components/Tasks/Tasks";
import NewTask from "./components/NewTask/NewTask";
import useHttp from "./components/hooks/use-http";

function App() {
  const [tasks, setTasks] = useState([]);

  // to avoid the infinite loop in use-http.js-sendRequest

  // we changed the structure in the use-http hook
  // we url and moved transformationTask (requestConfig, applyData)
  //as parameters in the sendRequest function
  // then it's not anymore an external variable in the useCallback, but internal.

  const { isLoading, error, sendRequest: fetchTasks } = useHttp();

  // pay attention to fecthTask as dependency:
  // fetchTasks, as all the functions, is generated for every re-rendering -> infinite loop!
  // we must be stop the fetchTasks generation by using an useCallback in use-http.js

  // we pass both url and transformTask  because they became parameter in sendRequests (see use-http.js)
  useEffect(() => {
    const transformTasks = (taskObj) => {
      const loadedTasks = [];
      for (const taskKey in taskObj) {
        loadedTasks.push({ id: taskKey, text: taskObj[taskKey].text });
      }
      setTasks(loadedTasks);
    };

    fetchTasks(
      {
        url: "https://react-http-7b575-default-rtdb.europe-west1.firebasedatabase.app/tasks.json",
      },
      transformTasks
    );
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
