export interface FootballEventSummary {
  DATA: Data[]
  INFO: Info
  LAST_CHANGE_KEY: null
}

export interface Data {
  STAGE_NAME: string
  RESULT_HOME: string
  RESULT_AWAY: string
  ITEMS: Item[]
}

export interface Item {
  INCIDENT_ID: string
  INCIDENT_TEAM: number
  INCIDENT_TIME: string
  INCIDENT_PARTICIPANTS: IncidentParticipant[]
  ADDED_TIME?: string
}

export interface IncidentParticipant {
  INCIDENT_TYPE: IncidentType
  HOME_SCORE?: string
  AWAY_SCORE?: string
  PARTICIPANT_NAME: string
  INCIDENT_NAME: string
  PARTICIPANT_ID: string
}

export interface Info {
  [key: string]: string | number
}

export type IncidentType =
  | 'GOAL'
  | 'ASSISTANCE'
  | 'YELLOW_CARD'
  | 'RED_CARD'
  | 'SUBSTITUTION_OUT'
  | 'SUBSTITUTION_IN'
  | 'PENALTY_KICK'
  | 'PENALTY_SCORED'
  | 'PENALTY_MISSED'
  | 'OWN_GOAL'

export interface PlayerStats {
  DATA: Data
  LAST_CHANGE_KEY: null
}

export interface Data {
  TABS: Tab[]
  BLOCKS: Block[]
}

export interface Block {
  TAB_ID: string
  LABELS: Label[]
  ITEMS: Array<Label[]>
}

export interface Label {
  ID: number
  VALUE: string
}

export interface Tab {
  ID: string
  VALUE: string
}
