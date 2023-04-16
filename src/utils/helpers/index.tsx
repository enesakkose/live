import { type Event } from "@/types"

export const getFilterEventScores = (event: Event, scoreKeys: string[]) => {
  return Object.entries(event)
  .filter(([key]) => scoreKeys.includes(key))
  .map(([key, value]) => value)
}