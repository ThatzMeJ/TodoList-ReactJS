import React from "react";
import { FaPlus } from "react-icons/fa";
import { useState, useRef } from "react";
import {
  Dialog,
  DialogPanel,
  Popover,
  PopoverButton,
  PopoverPanel,
} from "@headlessui/react";
import axios from "axios";
import { FaTasks } from "react-icons/fa";

export default function SidebarBtn() {
  const taskListName = useRef("");

  const handleInput = async (e) => {
    e.preventDefault();

    const taskListData = { name: taskListName.current.value };

    axios
      .post("http://localhost:8080/tasklist/new", taskListData)
      .then((response) => {
        if (response.status === 200) {
          console.log("Task was created:", response.data);
          taskListName.current = "";
        }
      })
      .catch((error) => {
        console.error("Error occurred while creating task list:", error);
      });
  };

  return (
    <>
      <Popover className="relative">
        {({ close }) => (
          <>
            <PopoverButton className="items-center bg-[var(--bg-color)] p-2 rounded-xl w-full flex gap-2">
              <FaPlus/>
              Create New List
            </PopoverButton>

            <PopoverPanel
              transition
              anchor="right start"
              className="absolute w-[300px] h-52 bg-white transition duration-200 ease-in-out [--anchor-gap:var(--spacing-5)] data-[closed]:-translate-y-1 data-[closed]:opacity-0 rounded-2xl text-black p-4"
            >
              <div className="flex flex-col gap-2">
                <form action="post" onSubmit={handleInput}>
                  <div className="mb-5">
                    <h4 className="font-extrabold text-2xl flex items-center gap-1 mb-2">
                      <FaTasks />
                      Add TaskList
                    </h4>
                    <label htmlFor="taskListName" className="text-sm font-bold">
                      Tasklist*
                    </label>
                    <input
                      id="taskListName"
                      type="text"
                      ref={taskListName}
                      className="bg-[var(--bg-color)] w-full h-10 p-1 rounded-lg border-gray-200 outline-none transition-colors duration-200"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="bg-black text-white p-2 rounded-md w-1/3"
                    onClick={() => {
                      if(taskListName.current.value.valueOf() !== ""){
                        close()
                      }
                    }}
                  >
                    Submit
                  </button>
                </form>
              </div>
            </PopoverPanel>
          </>
        )}
      </Popover>
    </>
  );
}
