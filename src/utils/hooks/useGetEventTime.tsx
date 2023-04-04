import dayjs from 'dayjs'
import { useEffect, useState } from 'react'
import duration from 'dayjs/plugin/duration'
dayjs.extend(duration)

export const useGetEventTime = (startTime: number) => {
  const [minute, setMinute] = useState<string>()

  useEffect(() => {
    const t = setInterval(() => {
      const a = dayjs.unix(startTime)
      const b = dayjs().unix()
      const c = dayjs.unix(b)
      const duration = dayjs.duration(c.diff(a))
      let minutes = duration.minutes()
      //let seconds = duration.seconds()
      if (minutes === 60) {
        //seconds = 0
        minutes += 1
      }
      const formattedMinutes = minutes < 10 ? `0${minutes + 1}` : `${minutes + 1}`
      //const formattedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`*/
      setMinute(formattedMinutes)
    }, 1000)

    return () => clearInterval(t)
  })

  return minute
}

//usememo ile düzelt
