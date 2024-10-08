import React, {useRef} from 'react'
import { motion, useCycle } from 'framer-motion'
import { useDimensions } from '../hooks/useDimensions'; 
import MenuToggle from './MenuToggle';
import Sidebar from './Sidebar';
import HamburgerContent from './HamburgerContent';
import TaskListNav from './TaskListNav';


export default function HamburgerSidebar() {
  const [isOpen, toggleOpen] = useCycle(false,true)
  const containerRef = useRef(null)
  const { height } = useDimensions(containerRef)

  
  const sidebar = {
    open: (height = 1000) => ({
      clipPath: `circle(${height * 2 + 400}px at 40px 40px)`,
      transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 2,
      },
    }),
    closed: {
      clipPath: "circle(30px at 40px 40px)",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };

  return (
    <motion.div
    initial={false}
    animate={isOpen ? "open" : "closed"}
    custom={height}
    ref={containerRef}  
    className='sm:hidden mr-[20%] parent-class'
    >
    <motion.div variants={sidebar} className="background"/>
    <HamburgerContent isOpen={isOpen}/>
    <MenuToggle toggle={() => toggleOpen()}/>
    </motion.div>
  )
}
