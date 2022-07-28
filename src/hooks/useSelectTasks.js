import React, { useState } from "react";

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
