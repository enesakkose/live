import dayjs from 'dayjs'
import { useEffect, useState, useMemo } from 'react'

export const useGetEventTime = (startTime: number, halftime: string) => {
  const [minute, setMinute] = useState<number>()

  const getElapsedMinutes = useMemo(() => {
    return () => {
      const currentTimestamp = Math.floor(Date.now() / 1000)

      let startTimestamp
      if (halftime === '1st half') {
        startTimestamp = 1
      } else {
        startTimestamp = 46 * 60
      }

      const elapsedTime = currentTimestamp - startTime
      const elapsedMinutes = Math.floor((startTimestamp + elapsedTime) / 60)

      return elapsedMinutes
    }
  }, [startTime, halftime])

  useEffect(() => {
    const t = setInterval(() => {
      const elapsedMinutes = getElapsedMinutes()
      setMinute(elapsedMinutes)
    }, 1000)

    return () => clearInterval(t)
  })

  return minute
}
