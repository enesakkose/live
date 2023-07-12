import { useEffect, useState, useMemo } from 'react'
import { EVENT_STATUS } from '@/types/Events'

export const useGetEventTime = (startTime: number, status: string) => {
  
  const getElapsedMinutes = () => {
    const currentTimestamp = Math.floor(Date.now() / 1000)
    let startTimestamp
    
    if (status === EVENT_STATUS.FIRST_HALF) {
      startTimestamp = 1
    } else if(status === EVENT_STATUS.FIRST_EXTRA) {
      startTimestamp = 91 * 60
    } else if(status === EVENT_STATUS.SECOND_EXTRA) {
      startTimestamp = 106 * 60
    } else{
      startTimestamp = 46 * 60
    }
    
    const elapsedTime = currentTimestamp - startTime
    const elapsedMinutes = Math.floor((startTimestamp + elapsedTime) / 60)
    
    return elapsedMinutes
  }

  const elapsedMinutes = getElapsedMinutes()
  const [minute, setMinute] = useState<number>(elapsedMinutes)
  
  useEffect(() => {
    const t = setInterval(() => {
      setMinute(elapsedMinutes)
    }, 1000)

    return () => clearInterval(t)
  })

  return minute
}
