export interface Incidents {
  incidents: Incident[]
}

export interface Incident {
  text?: string
  homeScore?: number
  awayScore?: number
  isLive?: boolean
  time?: number
  addedTime?: number
  incidentType: string
  player?: Player
  sequence?: number
  description?: string
  id?: number
  isHome?: boolean
  incidentClass?: string
  playerName?: string
  rescinded?: boolean
  reversedPeriodTime?: number
  playerIn?: PlayerIn
  playerOut?: PlayerOut
  length?: number
  reason?: string
  injury?: boolean
  assist1?: Assist1
}

export interface Player {
  name: string
  firstName?: string
  lastName?: string
  slug: string
  shortName: string
  position: string
  userCount: number
  id: number
}

export interface PlayerIn {
  name: string
  firstName?: string
  lastName?: string
  slug: string
  shortName: string
  position: string
  userCount: number
  id: number
}

export interface PlayerOut {
  name: string
  firstName?: string
  lastName?: string
  slug: string
  shortName: string
  position: string
  userCount: number
  id: number
}

export interface Assist1 {
  name: string
  slug: string
  shortName: string
  position: string
  userCount: number
  id: number
}

export enum IncidentType {
  PERIOD = "period",
  PENALTY_SHOOTOUT = "penaltyShootout",
  SUBSTITUTION = "substitution",
  CARD = "card",
  GOAL = "goal",
  INJURY_TIME = "injuryTime",
  INJURY = "injury",
}

export enum IncidentClass {
  SCORED = "scored",
  MISSED = "missed",
  REGULAR = 'regular'
}