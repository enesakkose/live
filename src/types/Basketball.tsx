export interface Category {
  DATA:            Datum[];
  META:            Meta;
  LAST_CHANGE_KEY: string;
}

export interface Datum {
  NAME:                   string;
  HEADER:                 string;
  NAME_PART_1:            string;
  NAME_PART_2:            string;
  TOURNAMENT_TEMPLATE_ID: string;
  COUNTRY_ID:             number;
  COUNTRY_NAME:           string;
  TOURNAMENT_STAGE_ID:    string;
  TOURNAMENT_TYPE:        TournamentType;
  TOURNAMENT_ID:          string;
  SOURCE_TYPE:            number;
  HAS_LIVE_TABLE:         number;
  STANDING_INFO:          number;
  TEMPLATE_ID:            string;
  TOURNAMENT_STAGE_TYPE:  number;
  SHORT_NAME:             string;
  URL:                    string;
  TOURNAMENT_IMAGE:       string;
  SORT:                   string;
  STAGES_COUNT:           number;
  ZKL:                    string;
  ZKU:                    string;
  TOURNAMENT_SEASON_ID:   string;
  CATEGORY_NAME:          string;
  EVENTS:                 Event[];
}

export interface Event {
  EVENT_ID:                      string;
  START_TIME:                    number;
  START_UTIME:                   number;
  STAGE_TYPE:                    MergeStageType;
  MERGE_STAGE_TYPE:              MergeStageType;
  STAGE:                         MergeStageType;
  SORT:                          string;
  ROUND?:                        string;
  VISIBLE_RUN_RATE:              number;
  HAS_LINEPS:                    number;
  STAGE_START_TIME?:             number;
  GAME_TIME:                     string;
  PLAYING_ON_SETS:               null;
  RECENT_OVERS:                  null;
  SHORTNAME_HOME:                string;
  HOME_PARTICIPANT_IDS:          string[];
  HOME_PARTICIPANT_TYPES:        number[];
  HOME_NAME:                     string;
  HOME_PARTICIPANT_NAME_ONE:     string;
  HOME_EVENT_PARTICIPANT_ID:     string;
  WINNER:                        number;
  ODDS_WINNER:                   number;
  ODDS_WINNER_OUTCOME:           number;
  HOME_GOAL_VAR:                 number;
  HOME_SCORE_CURRENT:            string;
  HOME_SCORE_PART_1:             string;
  HOME_SCORE_PART_2:             string;
  HOME_SCORE_PART_3:             string;
  HOME_SCORE_PART_4:             string;
  HOME_IMAGES:                   string[] | null;
  IMM:                           string;
  IMW:                           string;
  IMP:                           string;
  IME:                           string;
  SHORTNAME_AWAY:                string;
  AWAY_PARTICIPANT_IDS:          string[];
  AWAY_PARTICIPANT_TYPES:        number[];
  AWAY_NAME:                     string;
  AWAY_PARTICIPANT_NAME_ONE:     string;
  AWAY_EVENT_PARTICIPANT_ID:     string;
  AWAY_GOAL_VAR:                 number;
  AWAY_SCORE_CURRENT:            string;
  AWAY_SCORE_PART_1:             string;
  AWAY_SCORE_PART_2:             string;
  AWAY_SCORE_PART_3:             string;
  AWAY_SCORE_PART_4:             string;
  AWAY_IMAGES:                   string[] | null;
  HAS_LIVE_CENTRE?:              number;
  DRAW_PARTICIPANT_WINNER_HOME?: string;
  INFO_NOTICE?:                  string;
  DRAW_PARTICIPANT_WINNER_AWAY?: string;
  HOME_SCORE_FULL?:              number;
  HOME_SCORE_PART_5?:            string;
  AWAY_SCORE_FULL?:              number;
  AWAY_SCORE_PART_5?:            string;
}

export enum MergeStageType {
  AfterExtraTime = "AFTER_EXTRA_TIME",
  Finished = "FINISHED",
}

export enum TournamentType {
  P = "p",
  T = "t",
}

export interface Meta {
  BOOKMAKERS:          Bookmaker[];
  DATACORE_TRANSLATES: DatacoreTranslates;
}

export interface Bookmaker {
  BOOKMAKER_ID:           number;
  BOOKMAKER_BETTING_TYPE: number;
  BOOKMAKER_NAME:         string;
}

export interface DatacoreTranslates {
}