import React, { useEffect, useState } from 'react'
import useFetchCurrentTime from '../hooks/useFetchCurrentTime'

export default function CurrentTime() {
  let {currTime ,timeZone} = useFetchCurrentTime()

  return (
    <span>
      {timeZone}
    </span>
  )
}
