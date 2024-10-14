import TaskContext from "../hooks/TaskContext";
import TaskOptionsMenu from "./TaskOptionsMenu";
import { motion } from "framer-motion";
import { useFetchTaskList } from "../hooks/useFetchTaskList";
import { useContext } from "react";

export default function TaskListNav({ isHamburger, variants }) {
  // No need to wrap useFetchTaskList with useState.
  const { tasklist, error } = useFetchTaskList();

  const { selectedTaskList, setSelectedTaskList } = useContext(TaskContext);

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
    <>
      {!isHamburger && (
        <div>
          <ul className="flex flex-col gap-1 max-h-[80%]">
            {tasklist &&
              tasklist.map((task) => (
                <li
                  key={task.id}
                  className={`w-full p-1 rounded-md 
                    flex flex-row justify-between items-center hover:cursor-pointer
                    ${
                      selectedTaskList !== null &&
                      selectedTaskList.id === task.id
                        ? "bg-gray-300"
                        : ""
                    } hover:bg-gray-200`}
                  onClick={() => handleTaskListClick(task)}
                >
                  {task.name}
                  <div className="bg-gray-100 h-full px-2 rounded-lg ml-auto mr-2">
                    {tasklist === null ? 0 : task.tasks.length}
                  </div>
                  <TaskOptionsMenu entity={task} type={"taskList"} />
                </li>
              ))}
          </ul>
        </div>
      )}

      {/* Render for hamburger menu (below sm) */}
      {/* {isHamburger && (
        <motion.ul variants={variants} className='absolute top-40 flex flex-col w-[260px] p-2 items-center gap-2'>
          {tasklist.map(task => (
            <motion.li 
              key={task.id}
              className={`flex flex-row w-full p-1 justify-between rounded-lg ${selectedTaskList !== null && selectedTaskList.id === task.id  ? 'bg-gray-300' : ''} hover:bg-gray-300`}
              onClick={() => handleTaskListClick(task)}
            >
              {task.name}
              <motion.div className='bg-gray-100 w-6 h-6 text-center rounded-lg ml-auto mr-2'>{task.tasks.length}</motion.div>
              <TaskOptionsMenu entity={task} type={'taskList'} isHamburger={true}/>
            </motion.li>
          ))}
        </motion.ul>
      )} */}
    </>
  );
}
