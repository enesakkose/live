export interface Event {
  DATA:            Data;
  META:            Meta;
  LAST_CHANGE_KEY: string;
}

export interface Data {
  EVENT:      EVENTDATA;
  TOURNAMENT: Tournament;
  SPORT:      Sport;
}

export interface EVENTDATA {
  EVENT_ID:                           string;
  START_TIME:                         number;
  START_UTIME:                        number;
  STAGE_TYPE:                         string;
  MERGE_STAGE_TYPE:                   string;
  STAGE:                              string;
  SORT:                               string;
  ROUND:                              string;
  ERN:                                null;
  VISIBLE_RUN_RATE:                   number;
  HAS_LINEPS:                         number;
  STAGE_START_TIME:                   number;
  GAME_TIME:                          null | string;
  WL:                                 null;
  WE:                                 null;
  WQ:                                 null;
  SHORTNAME_HOME:                     string;
  HOME_PARTICIPANT_IDS:               string[];
  HOME_PARTICIPANT_TYPES:             number[];
  HOME_NAME:                          string;
  HOME_PARTICIPANT_NAME_ONE:          string;
  HOME_EVENT_PARTICIPANT_ID:          string;
  HOME_SLUG?:                         string;
  WINNER?:                            number;
  ODDS_WINNER?:                       number;
  ODDS_WINNER_OUTCOME?:               number;
  SERVICE?:                           number;
  HOME_GOAL_VAR:                      number;
  HOME_PARTICIPANT_COUNTRY_ID_ONE?:   number;
  HOME_PARTICIPANT_COUNTRY_NAME_ONE?: string;
  MAIN_PARTICIPANT_COUNTRY_IDS?:      number[];
  COUNTRY_NAME?:                      string;
  HOME_SCORE_CURRENT:                 string;
  HOME_SCORE_PART_1:                  string;
  HOME_SCORE_PART_2?:                 string;
  HOME_SCORE_PART_3?:                 string;
  HOME_SCORE_PART_4?:                 string;
  HOME_IMAGES:                        string[];
  IMM:                                string;
  IMW:                                string;
  IMP:                                string;
  IME:                                null | string;
  SHORTNAME_AWAY:                     string;
  AWAY_PARTICIPANT_IDS:               string[];
  AWAY_PARTICIPANT_TYPES:             number[];
  AWAY_NAME:                          string;
  AWAY_PARTICIPANT_NAME_ONE:          string;
  AWAY_EVENT_PARTICIPANT_ID:          string;
  AWAY_SLUG?:                         string;
  AWAY_GOAL_VAR:                      number;
  AWAY_PARTICIPANT_COUNTRY_ID_ONE?:   number;
  AWAY_PARTICIPANT_COUNTRY_NAME_ONE?: string;
  AWAY_SCORE_CURRENT:                 string;
  AWAY_SCORE_PART_1:                  string;
  AWAY_SCORE_PART_2?:                 string;
  AWAY_SCORE_PART_3?:                 string;
  AWAY_SCORE_PART_4?:                 string;
  AWAY_IMAGES:                        string[];
  AL?:                                null;
  HAS_LIVE_CENTRE?:                   number;
  SHOW_IN_MY_TEAMS:                   number;
  LIVE_MARK?:                         string;
  BX?:                                null;
  WU?:                                null;
  WV?:                                null;
  TV_LIVE_STREAMING?:                 TvLiveStreaming;
  AN?:                                string;
  PLAYING_ON_SETS?:                   null;
  RECENT_OVERS?:                      null;
  LIVE_IN_OFFER_BOOKMAKER_ID?:        number;
  LIVE_IN_OFFER_STATUS?:              number;
  HOME_SCORE_FULL?:                   number;
  HOME_SCORE_PART_5?:                 string;
  AWAY_SCORE_FULL?:                   number;
  AWAY_SCORE_PART_5?:                 string;
  INFO_NOTICE?:                       string;
  HOME_TIEBREAK_PART_1?:              string;
  AWAY_TIEBREAK_PART_1?:              string;
  HOME_TIEBREAK_PART_2?:              string;
  AWAY_TIEBREAK_PART_2?:              string;
  HOME_TIEBREAK_PART_3?:              string;
  AWAY_TIEBREAK_PART_3?:              string;
  HOME_TIEBREAK_PART_4?:              string;
  AWAY_TIEBREAK_PART_4?:              string;
  HOME_TIEBREAK_PART_5?:              string;
  AWAY_TIEBREAK_PART_5?:              string;
}

export interface TvLiveStreaming {
  HP: HP[];
}

export interface HP {
  HPI: number;
  HPN: string;
  HPR: string;
}

export interface Sport {
  SPORT_ID: number;
}

export interface Tournament {
  NAME:                   string;
  HEADER:                 string;
  NAME_PART_1:            string;
  NAME_PART_2:            string;
  TOURNAMENT_TEMPLATE_ID: string;
  COUNTRY_ID:             number;
  COUNTRY_NAME:           string;
  TOURNAMENT_STAGE_ID:    string;
  TOURNAMENT_TYPE:        string;
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
  SUPER_TEMPLATE_ID:      number;
  STAGES_COUNT:           number;
  ZKL:                    null;
  ZKU:                    null;
  TOURNAMENT_SEASON_ID:   string;
  CATEGORY_NAME:          string;
}

export interface Meta {
  BOOKMAKERS: Bookmaker[];
}

export interface Bookmaker {
  BOOKMAKER_ID: number;
  TYPE_BET:     string;
  SD:           string;
}