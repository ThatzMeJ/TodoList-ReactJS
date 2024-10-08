import React from 'react'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { CiMenuKebab } from "react-icons/ci";
import axios from 'axios';
import { useTask } from '../App';


export default function TaskOptionsMenu({ entity,type, isHamburger}) {
  const { selectedTaskList ,setSelectedTaskList } = useTask();

  // Function to handle deletion based on entity type
  function deleteEntity() {
    if (type === 'task') {
      axios.delete(`http://localhost:8080/task/delete/${entity.id}`)
        .then((response) => {
          if (response.status === 200) {
            console.log("Task was successfully deleted.");
          }
        })
        .catch(error => {
          console.error("Unable to delete task!", error);
        });

    } else if (type === 'taskList') {
      axios.delete(`http://localhost:8080/tasklist/delete/${entity.id}`)
        .then((response) => {
          if (response.status === 200) {
            console.log("Task list was successfully deleted.");
            setSelectedTaskList(null)
          }
        })
        .catch(error => {
          console.error("Unable to delete task list!", error);
        });
    }
  }

  //Function to handle duplication based on entity type
  function duplicateEntity(){
    if (type === 'task') {

      const duplicateTask = {
        title : `${entity.title}`,
        startTime : entity.startTime,
        endTime : entity.endTime
      }
      console.log(duplicateTask.startTime)

      axios.post(`http://localhost:8080/task/tasklist/${selectedTaskList.id}/new`, duplicateTask)
        .then(response => {
          if(response.status === 200){
              console.log("Task was duplicated", response.data)
            
          }
        }).catch(error => {
          console.error("Unable to duplicate task:", error)
        })

    } else if(type === 'taskList') {

      const handleTasklistPost = {
        name : `${entity.name} Copy`
      }
      console.log(entity.tasks)
      axios.post('http://localhost:8080/tasklist/new', handleTasklistPost)
        .then(response => {
          if(response.status === 200){
            console.log("Tasklist create:", response.data)
          }
        })
        .catch(error => {
          console.error("Unable to create tasklist:", error)
        })
    }
  }

  return (
    <Menu as="div" className={`relative inline-block ${isHamburger ? '  top-[-2px] ' : ''}`}>
      <div>
        <MenuButton className={`inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white  text-sm  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray- ${isHamburger ? 'px-2 py-[6px] ' : 'px-2 py-2'}`}>
          <CiMenuKebab/>
        </MenuButton>
      </div>

      <MenuItems
        transition
        className="absolute right-0 z-10 mt-2 w-40  origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div className="py-1">
          <MenuItem>
            <button
            className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 w-full text-start"
            >          
    
            Edit
          </button>
          </MenuItem>
          <MenuItem>
          <button
            className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 w-full text-start"
            onClick={() => duplicateEntity()}
            >          
    
            Duplicate
          </button>
          </MenuItem>
        </div>
  
        <div className="py-1">
          <MenuItem>
            <button
            className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 w-full text-start"
            onClick={() => deleteEntity()}
            >          
            Delete
          </button>
          </MenuItem>
        </div>
      </MenuItems>
    </Menu>
  )
}
