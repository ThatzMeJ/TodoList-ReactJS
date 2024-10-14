import React, { useContext } from "react";
import TaskContext from "../hooks/TaskContext";
import axios from "axios";
import { CiClock2 } from "react-icons/ci";
import { FaHandMiddleFinger } from "react-icons/fa6";
import AddNewTaskBtn from "./AddNewTaskBtn";
import TaskOptionsMenu from "./TaskOptionsMenu";
import CurrentTime from "./CurrentTime";
import TaskCheckBox from "./TaskCheckBox";
import useFetchTask from "../hooks/useFetchTask";
import MyDatePicker from "./MyDatePicker";


export default function TaskBoard() {
  const { selectedTaskList,  } = useContext(TaskContext);
  const [tasks] = useFetchTask();

  const formatTime = (string) => {
    const date = new Date(string); // Create Date object from the string

    // Format hours and minutes
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");

    return `${hours}:${minutes}`; // Return formatted time
  };

  
  
  return (
    <div className=" max-w-[1000px] h-full w-full flex flex-col ">
      <h2 className="font-bold text-3xl flex items-center gap-1 mb-5">
        Good <CurrentTime/>, Jay! <FaHandMiddleFinger />
      </h2>
      {selectedTaskList !== null && tasks ? (
        <ul className=" w-full flex flex-col gap-2">
          {tasks.map((task) => (
            <li
              key={task.id}
              className="flex items-center flex-row justify-between bg-[--bg-sidebar] w-full h-12 px-2 rounded-xl"
            >
                <TaskCheckBox task={task}/>
                <p>{task.title}</p>

                <div className="flex flex-row items-center gap-1 text-sm bg-gray-200 px-2 rounded-lg ml-auto mr-2 w-">
                  <CiClock2 />
                  <span>
                    {formatTime(task.startTime)} - {formatTime(task.endTime)}
                  </span>
                </div>

                <TaskOptionsMenu entity={task} type={'task'}/>
            </li>
          ))}
        </ul>
      ) : (
        <>
        </>
      )}
      
      <AddNewTaskBtn />
    </div>
  );
}
