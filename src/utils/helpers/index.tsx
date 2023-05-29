import { type Score } from "@/types/Events"

export const getFilterEventScores = (event: Score) => {
  const SCORE_KEYS = [
    "period1",
    "period2",
    "period3",
    "period4",
    "period5",
    "overtime",
    "point"
  ]

  return Object.entries(event)
    .filter(([key]) => SCORE_KEYS.includes(key))
    .map(([key, value]) => value)
}

export const convertPercentage = (val1: string, val2: string) => {
  const total = Number(val1) + Number(val2)
  const homePercentage = (Number(val1) * 100) / total
  const awayPercentage = 100 - homePercentage

  return { homePercentage, awayPercentage }
}

export const valueWithoutPercentage = (val: string) => {
  return val.split('%')[0].trim()
}