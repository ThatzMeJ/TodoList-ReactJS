import React, { createContext, useContext, useState } from "react";
import Sidebar from "./components/Sidebar";
import TaskBoard from "./components/TaskBoard";


//Create TaskContext
const TaskContext = createContext()

export const useTask = () => useContext(TaskContext)

function App() {
  const [selectedTaskList, setSelectedTaskList] = useState(null)
  
  return (
    <TaskContext.Provider value={{selectedTaskList, setSelectedTaskList}}>
    <div className="flex flex-row pt-2 h-full w-full items-start">
      <Sidebar/>
      <TaskBoard/>
    </div>
    </TaskContext.Provider>
  );
}

export default App;
