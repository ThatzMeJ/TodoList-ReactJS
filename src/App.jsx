import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import TaskBoard from "./components/TaskBoard";
import HamburgerSidebar from "./components/HamburgerSidebar";
import TaskContext from './hooks/TaskContext'; // Correct import



 function App() {
  const [selectedTaskList, setSelectedTaskList] = useState(null);

  return (
    <TaskContext.Provider value={{ selectedTaskList, setSelectedTaskList }}>
      <div className="flex sm:flex-row  pt-2 h-full w-full items-start">
        <Sidebar />
        <HamburgerSidebar />
        <TaskBoard />
      </div>
    </TaskContext.Provider>
  );
}

export default App;
