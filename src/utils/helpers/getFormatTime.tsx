import dayjs from 'dayjs'

export const getFormatTime = (time: number) => {
  return dayjs.unix(time).format('HH:mm')
}

export const getDate = (time: number) => {
  return dayjs.unix(time).format('DD.MM.YYYY')
}

export const getDateV2 = (time: number) => {
  return dayjs.unix(time).format('YYYY-MM-DD')
}