export interface Category {
  DATA:            Data[];
  META:            Meta;
  LAST_CHANGE_KEY: string;
}

export interface Data {
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
  ZI?:                    string;
  HAS_LIVE_TABLE:         number;
  STANDING_INFO:          number;
  TEMPLATE_ID:            string;
  TOURNAMENT_STAGE_TYPE:  number;
  SHORT_NAME:             string;
  URL:                    string;
  TOURNAMENT_IMAGE:       string | null;
  SORT:                   string;
  SUPER_TEMPLATE_ID:      number;
  STAGES_COUNT:           number;
  ZKL:                    string;
  ZKU:                    string;
  TOURNAMENT_SEASON_ID:   string;
  TOURNAMENT_CATEGORY_ID: string;
  CATEGORY_NAME:          string;
  EVENTS:                 Event[];
}

export interface Event {
  EVENT_ID:                           string;
  START_TIME:                         number;
  START_UTIME:                        number;
  STAGE_TYPE:                         StageType;
  MERGE_STAGE_TYPE:                   StageType;
  STAGE:                              StageType;
  SORT:                               string;
  SERVICE?:                           number;
  ROUND:                              string;
  VISIBLE_RUN_RATE:                   number;
  HAS_LINEPS:                         number;
  STAGE_START_TIME?:                  number;
  GAME_TIME:                          string;
  PLAYING_ON_SETS:                    null;
  RECENT_OVERS:                       null;
  SHORTNAME_AWAY:                     string;
  SHORTNAME_HOME:                     string;
  HOME_PARTICIPANT_IDS:               string[];
  HOME_PARTICIPANT_TYPES:             number[];
  HOME_NAME:                          string;
  HOME_PARTICIPANT_NAME_ONE:          string;
  HOME_PARTICIPANT_NAME_TWO?:         string;
  HOME_EVENT_PARTICIPANT_ID:          string;
  WINNER:                             number;
  ODDS_WINNER:                        number;
  ODDS_WINNER_OUTCOME:                number;
  HOME_GOAL_VAR:                      number;
  HOME_PARTICIPANT_COUNTRY_ID_ONE?:   number;
  HOME_PARTICIPANT_COUNTRY_NAME_ONE?: string;
  HOME_PARTICIPANT_COUNTRY_ID_TWO?:   number;
  HOME_PARTICIPANT_COUNTRY_NAME_TWO?: string;
  MAIN_PARTICIPANT_COUNTRY_IDS?:      number[];
  COUNTRY_NAME?:                      string;
  HOME_SCORE_CURRENT:                 string;
  HOME_SCORE_PART_1:                  string;
  HOME_SCORE_PART_2:                  string;
  HOME_TIEBREAK_PART_1?:              string;
  HOME_IMAGES:                        string[] | null;
  IMM:                                string;
  IMW:                                string;
  IMP:                                string;
  IME:                                string;
  AWAY_PARTICIPANT_IDS:               string[];
  AWAY_PARTICIPANT_TYPES:             number[];
  AWAY_NAME:                          string;
  AWAY_PARTICIPANT_NAME_ONE:          string;
  AWAY_PARTICIPANT_NAME_TWO?:         string;
  AWAY_EVENT_PARTICIPANT_ID:          string;
  AWAY_GOAL_VAR:                      number;
  AWAY_PARTICIPANT_COUNTRY_ID_ONE?:   number;
  AWAY_PARTICIPANT_COUNTRY_NAME_ONE?: string;
  AWAY_PARTICIPANT_COUNTRY_ID_TWO?:   number;
  AWAY_PARTICIPANT_COUNTRY_NAME_TWO?: string;
  AWAY_SCORE_CURRENT:                 string;
  AWAY_SCORE_PART_1:                  string;
  AWAY_SCORE_PART_2:                  string;
  AWAY_TIEBREAK_PART_1?:              string;
  AWAY_IMAGES:                        string[] | null;
  HOME_SLUG?:                         string;
  HOME_SCORE_PART_GAME?:              string;
  AWAY_SLUG?:                         string;
  AWAY_SCORE_PART_GAME?:              string;
  HAS_LIVE_CENTRE?:                   number;
  DRAW_PARTICIPANT_WINNER_AWAY?:      string;
  INFO_NOTICE?:                       string;
  HOME_SCORE_PART_3?:                 string;
  HOME_SCORE_PART_4?:                 string;
  HOME_SCORE_PART_5?:                 string;
  AWAY_SCORE_PART_3?:                 string;
  AWAY_SCORE_PART_4?:                 string;
  AWAY_SCORE_PART_5?:                 string;
  HOME_TIEBREAK_PART_2?:              string;
  AWAY_TIEBREAK_PART_2?:              string;
  HOME_TIEBREAK_PART_3?:              string;
  AWAY_TIEBREAK_PART_3?:              string;
  
}

export enum An {
  N = "n",
  Y = "y",
}

export enum StageType {
  Canceled = "CANCELED",
  Finished = "FINISHED",
  FirstSet = "FIRST_SET",
  Retired = "RETIRED",
  Scheduled = "SCHEDULED",
  SecondSet = "SECOND_SET",
  ThirdSet = "THIRD_SET",
  Walkover = "WALKOVER",
  Live = 'LIVE',
  Postponed = 'POSTPONED',
  HT = 'HT'
}

export enum Round {
  Final = "Final",
  SemiFinals = "Semi-finals",
  The116Finals = "1/16-finals",
  The18Finals = "1/8-finals",
}



export interface TvLiveStreaming {
  "2": The2[];
}

export interface The2 {
  BU: Bu;
  IU: Iu;
  BN: Bn;
  BI: number;
  BT: string;
}

export enum Bn {
  Bet365 = "bet365",
}

export enum Bu {
  Bookmaker16FromLiveStreamingSport2 = "/bookmaker/16/?from=live-streaming&sport=2",
}

export enum Iu {
  ResImageDataBookmakers1716PNG = "/res/image/data/bookmakers/17-16.png",
}

export enum TournamentType {
  P = "p",
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

export enum SportName {
  football = 1,
  tennis,
  basketball
}


export type IconNameType = 
  | 'left-chevron'
  | 'right-chevron'
  | 'chevron'
  | 'star'
  | 'basket'
  | 'gear'
  | 'house'
  | 'left'
  | 'search'
  | 'soccer'
  | 'tennis'
  | 'calendar4-week'
  | 'favourites'
  | 'bell'
  | 'fillbell'
