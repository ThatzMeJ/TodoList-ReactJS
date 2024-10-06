import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useTask } from '../App'
import TaskOptionsMenu from './TaskOptionsMenu'

export default function ListNavigation() {
  const [tasklist, setTaskList] = useState([])


  const {selectedTaskList, setSelectedTaskList} = useTask()

  useEffect(() => {
    axios.get("http://localhost:8080/tasklist/all")
      .then(response => {
        setTaskList(response.data)
      })
      .catch(error => {
        console.error("There was an error fetching the tasks!", error);
      })

  }, [tasklist])

 // Function to handle task list selection/deselection
 const handleTaskListClick = (task) => {
  if (selectedTaskList && selectedTaskList.id === task.id) {
    // If the clicked task list is already selected, unselect it
    setSelectedTaskList(null);
  } else {
    // Otherwise, select the clicked task list
    setSelectedTaskList(task);
  }
};

  return (
    <div>
      <ul className='flex flex-col gap-1'>
        {tasklist.map(task => (
          <li 
          key={task.id} 
          className={`w-full p-1 rounded-md ${selectedTaskList !== null && selectedTaskList.id === task.id  ? 'bg-gray-300' : ''} hover:bg-gray-200`}
          onClick={() => handleTaskListClick(task)}>
          <a href="#" className='flex flex-row justify-between items-center'>
            {task.name}
            <div className='bg-gray-100 h-full px-2 rounded-lg ml-auto mr-2'>{task.tasks.length}</div>
            <TaskOptionsMenu entity={task} type={'taskList'}/>
          </a>
        </li>
        ))}
      </ul>
    </div>
  )
}
