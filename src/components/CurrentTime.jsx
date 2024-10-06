import React, { useEffect, useState } from 'react'

export default function CurrentTime() {
  const [currentTime, setCurrentTime] = useState(new Date())
   let time = currentTime.getHours()

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date())
    }, 60000) // 60,000 milliseconds = 1 minute

    return () => clearInterval(intervalId)
  }, [])
  return (
    <span>
      {time >= 5 && time <= 11 ? 'Morning' : time >= 12 && time <= 17 ? "Afternoon" : "Evening"}
    </span>
  )
}
