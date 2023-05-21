export interface EventLineups {
  DATA:            Data[];
  LAST_CHANGE_KEY: null;
}

export interface Data {
  FORMATION_NAME:    string;
  FORMATIONS:        Formation[];
  PLAYER_GROUP_TYPE: number;
}

export interface Formation {
  FORMATION_LINE:       number;
  FORMATION_DISPOSTION: string;
  MEMBERS:              Member[];
}

export interface Member {
  ROW_ID:             number;
  PLAYER_ID:          string;
  PLAYER_FULL_NAME:   string;
  LPG?:               string;
  LPI?:               string;
  LPR?:               string;
  SHORT_NAME:         string;
  PLAYER_NUMBER?:     number;
  PLAYER_COUNTRY:     number;
  PLAYER_POSITION_ID: number;
  PLAYER_TYPE:        number;
  INCIDENTS?:         number[];
  PLAYER_POSITION:   number;
}
