import React, { useContext, useState } from "react";
import { FaPlus } from "react-icons/fa6";
import {
  CloseButton,
  Popover,
  PopoverBackdrop,
  PopoverButton,
  PopoverPanel,
} from "@headlessui/react";
import TaskContext from "../hooks/TaskContext";
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import MyDatePicker from "./MyDatePicker";
import { createTheme, ThemeProvider } from "@mui/material";
import BasicTimePicker from "./TimePicker";
export default function AddNewTaskBtn() {
  const { selectedTaskList } = useContext(TaskContext);

  return (
    
      <Popover className="mt-auto relative ">
        <PopoverButton
          className="bg-black text-white w-[52%]
        min-w-64 h-[60px] flex flex-row items-center justify-start rounded-3xl text-sm pl-2 gap-2 mt-auto mb-5 hover:opacity-70"
        >
          <FaPlus />
          Create New Task
        </PopoverButton>

        <PopoverBackdrop
          transition
          className="fixed inset-0 backdrop-blur-sm backdrop-opacity-65 transition-opacity duration-100 ease-out data-[closed]:opacity-0"
        />

        <PopoverPanel
          transition
          anchor="top"
          className="absolute w-96 h-96 bg-black [--anchor-gap:10px] transition duration-1000 ease-out data-[closed]:scale-95 data-[closed]:opacity-0 rounded-lg"
        >
          <form action="#" method="post" className="flex flex-col justify-center align-middle gap-2">
            
            <h4 className="text-white text-xl font-bold">Create New Task</h4>
          <div className="mt-4">
          <MyDatePicker/>
          </div>

          <div className="flex flex-row justify-between w-full">
            <div className="text-white font-medium">
              Start Time:
              <BasicTimePicker/>
            </div>

            
          </div>
          </form>
          
           
         
       

        </PopoverPanel>
      </Popover>
    
  );
}


const newTheme = (theme) => createTheme({
  ...theme,
  components: {
    MuiPickersDay: {
      styleOverrides: {
        root: {
          color: '#bbdefb',
          borderRadius: '2px',
          borderWidth: '1px',
          borderColor: '#2196f3',
          border: '1px solid',
          backgroundColor: '#0d47a1',
        }
      }
    }
  }
})
