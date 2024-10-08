import React from 'react'
import { motion } from 'framer-motion';
import TaskListNav from './TaskListNav';
export default function HamburgerContent({isOpen}) {
  
  const variants = {
    open: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
  };

  return (
    <motion.div variants={variants} className={`hamburger-content ${isOpen ? 'none' : 'hidden'}`}>
      <motion.h3 className={`absolute left-7 top-20 text-xl font-bold`}>
        Private
      </motion.h3>
      <TaskListNav isHamburger={true} variants={variants}/>
    </motion.div>
  )
}
