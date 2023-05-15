export interface EventStats {
  DATA: Data[]
  LAST_CHANGE_KEY: null
}

export interface Data {
  STAGE_NAME: string
  GROUPS: Group[]
}

export interface Group {
  GROUP_LABEL: string
  ITEMS: Item[]
}

export interface Item {
  INCIDENT_NAME: string
  VALUE_HOME: string
  VALUE_AWAY: string
}
