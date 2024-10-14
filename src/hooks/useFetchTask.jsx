import React, { useContext, useEffect, useState } from 'react'
import TaskContext from './TaskContext'
import axios from 'axios'

export default function useFetchTask() {
  const {selectedTaskList} = useContext(TaskContext)
  let [taskData, setTaskData] = useState([])

  useEffect(() => {
    if (selectedTaskList !== null) {
      // Make the API call only if a task is selected
      axios
        .get(`http://localhost:8080/task/tasklist/${selectedTaskList.id}`)
        .then((response) => {
          setTaskData(response.data);
        })
        .catch((error) => {
          console.error("There was an error fetching the tasks!", error);
        });
    }
  }, [selectedTaskList, taskData]);

  
  return [taskData]

}
