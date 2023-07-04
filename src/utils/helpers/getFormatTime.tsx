import dayjs from 'dayjs'

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
