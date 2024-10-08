import React from 'react'
import TaskListNav from './TaskListNav'
import NewTaskListBtn from './NewTaskListBtn'

export default function Sidebar() {
  return (
    <div className="bg-[var(--bg-sidebar)] p-2  flex-col gap-4 h-[100%] min-w-[240px] max-w-[360px] sm:mr-[10%] rounded-2xl hidden sm:flex">
      <h3 className='text-xl font-bold'>
        Private
      </h3>
      <TaskListNav/>
      <NewTaskListBtn/>
    </div>
  )
}
