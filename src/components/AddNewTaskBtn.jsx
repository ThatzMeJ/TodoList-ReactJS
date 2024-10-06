import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { useTask } from "../App";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";


export default function AddNewTaskBtn() {

  const { selectedTaskList } = useTask();


  return (
    <>
      {/* <button
        className="bg-black text-white w-[52%] h-[60px] flex flex-row items-center justify-start rounded-3xl text-sm pl-2 gap-2 mt-auto mb-5 hover:opacity-70"
        onClick={togglePopover}
      >
        <FaPlus />
        Create New Task
      </button> */}

      <Popover className="mt-auto relative">
        <PopoverButton className="bg-black text-white w-[52%] h-[60px] flex flex-row items-center justify-start rounded-3xl text-sm pl-2 gap-2 mt-auto mb-5 hover:opacity-70"
        
        >
          <FaPlus />
          Create New Task
        </PopoverButton>

        <PopoverPanel
          transition
          
        >
          
        </PopoverPanel>
      </Popover>
    </>
  );
}
