import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime)

export const getStartTime = (time: number) => {
  return dayjs.unix(time).format('HH:mm')
}

export const getDate = (time: number) => {
  return dayjs.unix(time).format('DD.MM.YYYY')
}

export const getDateV2 = (time: number) => {
  return dayjs.unix(time).format('YYYY-MM-DD')
}

export const getConvertDaysToAge = (timestamp: number) => {
  const birthDate = dayjs(timestamp * 1000)
  const age = dayjs().diff(birthDate, 'year')

  return age
}

export const getTimeFromNow = (timestamp: number) => {
  const date = dayjs(timestamp * 1000).format('YYYY-MM-DD')

  return dayjs(date).fromNow()
}