import React from 'react'
import ListNavigation from './TaskListNav'
import SidebarBtn from './NewTaskListBtn'

export default function Sidebar() {
  return (
    <aside className=' bg-[var(--bg-sidebar)] p-2 flex flex-col gap-4 h-[100%] min-w-[240px] max-w-[360px] mr-[10%] rounded-2xl'>
      <h3 className='text-xl font-bold'>
        Private
      </h3>
      <ListNavigation/>
      <SidebarBtn/>
    </aside>
  )
}
