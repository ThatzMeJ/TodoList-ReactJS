import React from 'react'
import { Checkbox } from '@headlessui/react'
import { useState } from 'react'
import { FaCheck } from "react-icons/fa";
import axios from 'axios';


function TaskCheckBox({task}) {
  const [enabled, setEnabled] = useState(false)

  const handleClick = () => {
    axios.delete(`http://localhost:8080/task/delete/${task.id}`)
        .then(response => {
          if(response.status === 200){
            console.log('Task was successfully deleted:', response.data)

          }
        }).catch(error => {
          console.error("Unable to delete task: ",error)
        })
  }
  return (
    <Checkbox
      checked={enabled}
      onChange={setEnabled}
      onClick={() => handleClick()}
      className="border-solid border-2  group size-6 rounded-md bg-white/10 p-1 ring-1 ring-white/15 ring-inset data-[checked]:bg-black mr-2"
    >
      <FaCheck className="hidden size-4 fill-white group-data-[checked]:block"/>
    </Checkbox>
  )
}

export default TaskCheckBox