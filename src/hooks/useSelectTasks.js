import React, { useState } from "react";

//this hook returns an array of selectedTasks keys
//a handler for filtering the tasks
//a state updating fxn for updating the tasks
export default function useSelectTasks() {
  const [selectedTasksState, setSelectedTasksState] = useState([]);

  const selectTaskHandler = (value) => {
    setSelectedTasksState((prevState) => {
      const found = prevState.find((taskId) => taskId === value);
      if (found) {
        return prevState.filter((taskId) => taskId !== found);
      } else {
        return [...prevState, value];
      }
    });
  };
  return [selectedTasksState, selectTaskHandler, setSelectedTasksState];
}
