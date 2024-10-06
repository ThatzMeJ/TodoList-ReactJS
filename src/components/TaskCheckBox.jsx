import React from 'react'
import { Checkbox } from '@headlessui/react'
import { useState } from 'react'
import { FaCheck } from "react-icons/fa";


function TaskCheckBox() {
  const [enabled, setEnabled] = useState(true)
  return (
    <Checkbox
      checked={enabled}
      onChange={setEnabled}
      className="border-solid border-2  group size-6 rounded-md bg-white/10 p-1 ring-1 ring-white/15 ring-inset data-[checked]:bg-black mr-2"
    >
      <FaCheck className="hidden size-4 fill-white group-data-[checked]:block"/>
    </Checkbox>
  )
}

export default TaskCheckBox