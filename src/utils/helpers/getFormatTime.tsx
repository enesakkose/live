import dayjs from 'dayjs'

export const getFormatTime = (time: number) => {
  return dayjs.unix(time).format('HH:mm')
} 