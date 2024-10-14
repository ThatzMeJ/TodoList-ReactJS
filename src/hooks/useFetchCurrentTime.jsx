import React, { useEffect, useState } from 'react'

export default function useFetchCurrentTime() {
  const [time, setTime] = useState(new Date())
  const [timeZone, setTImeZone] = useState('')

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date())
    }, 600000) // 60,000 milliseconds = 1 minute
    

    if(time >= 5 && time <= 11){
      setTImeZone('Morning')
    } else if ( time >= 12 && time <= 17){
      setTImeZone("Afternoon")
    } else {
      setTImeZone("Evening")
    }

    return () => clearInterval(intervalId)
  }, [])

  let currTime = time.getHours()
  return {currTime, timeZone}
}
