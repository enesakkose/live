export interface H2H {
  DATA: Data[];
}

export interface Data {
  TAB_NAME: string;
  GROUPS:   Group[];
}

export interface Group {
  GROUP_LABEL: string;
  ITEMS:       H2HEVENT[];
}

export interface H2HEVENT {
  START_TIME:                         number;
  EVENT_ID:                           string;
  SURFACE_CODE?:                      Surface;
  SURFACE_NAME?:                      Surface;
  EVENT_NAME:                         string;
  STAGE:                              Stage;
  COUNTRY_ID:                         number;
  COUNTRY_NAME:                       string;
  EVENT_ACRONYM:                      string;
  HOME_PARTICIPANT:                   string;
  HOME_PARTICIPANT_NAME_ONE:          string;
  HOME_PARTICIPANT_NAME_TWO:          null;
  AWAY_PARTICIPANT:                   string;
  AWAY_PARTICIPANT_NAME_ONE:          string;
  AWAY_PARTICIPANT_NAME_TWO:          null;
  CURRENT_RESULT:                     string;
  HOME_SCORE_FULL:                    null | string;
  AWAY_SCORE_FULL:                    null | string;
  HOME_IMAGES:                        string[];
  AWAY_IMAGES:                        string[];
  HOME_PARTICIPANT_COUNTRY_ID_ONE?:   number;
  HOME_PARTICIPANT_COUNTRY_NAME_ONE?: string;
  HOME_PARTICIPANT_COUNTRY_ID_TWO?:   number;
  HOME_PARTICIPANT_COUNTRY_NAME_TWO?: null;
  AWAY_PARTICIPANT_COUNTRY_ID_ONE?:   number;
  AWAY_PARTICIPANT_COUNTRY_NAME_ONE?: string;
  AWAY_PARTICIPANT_COUNTRY_ID_TWO?:   number;
  AWAY_PARTICIPANT_COUNTRY_NAME_TWO?: null;
  H_RESULT:                          HResult;
  TEAM_MARK:                         TeamMark;
  FT_RESULT?:                         string;
  KX?:                                string;
  KY?:                                string;
}

export enum HResult {
  Draw = "DRAW",
  Lost = "LOST",
  LostOvertime = "LOST_OVERTIME",
  Win = "WIN",
  WinOvertime = "WIN_OVERTIME",
}

export enum Stage {
  AfterExtraTime = "AFTER_EXTRA_TIME",
  AfterPenalties = "AFTER_PENALTIES",
  Finished = "FINISHED",
  Retired = "RETIRED",
  Walkover = "WALKOVER",
}

export enum Surface {
  Clay = "clay",
  Grass = "grass",
  Hard = "hard",
}

export enum TeamMark {
  Away = "away",
  Home = "home",
}
