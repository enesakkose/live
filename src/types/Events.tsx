export interface Events {
  events: Event[]
}

export interface Event {
  tournament:                Tournament;
  roundInfo:                 RoundInfo;
  customId:                  string;
  status:                    Status;
  winnerCode:                number;
  homeTeam:                  Team;
  awayTeam:                  Team;
  homeScore:                 Score;
  awayScore:                 Score;
  time:                      Time;
  changes:                   Changes;
  hasGlobalHighlights:       boolean;
  hasEventPlayerStatistics?: boolean;
  hasEventPlayerHeatMap?:    boolean;
  detailId?:                 number;
  id:                        number;
  startTimestamp:            number;
  slug:                      string;
  finalResultOnly:           boolean;
  venue?:                    Venue;
  periods?:                  Periods;
  previousLegEventId?:       number;
  firstToServe?:             number;
  groundType?:               string;
  lastPeriod:               keyof Score;
}

export interface Score {
  current:          number;
  display:          number;
  period1:          number;
  period2:          number;
  normaltime:       number;
  overtime?:        number;
  penalties?:       number;
  period3?:         number;
  period4?:         number;
  period5?:         number;
  period1TieBreak?: number;
  period2TieBreak?: number;
  period3TieBreak?: number;
  period4TieBreak?: number;
  period5TieBreak?: number;
  point?:           string;
}

export interface Team {
  name:            string;
  slug:            string;
  shortName:       string;
  sport:           Sport;
  userCount:       number;
  disabled?:       boolean;
  type:            number;
  id:              number;
  country:         TeamCountry;
  subTeams:        any[];
  teamColors:      TeamColors;
  gender?:         string;
  nameCode?:       string;
  national?:       boolean;
  playerTeamInfo?: PlayerTeamInfo;
  ranking?:        number;
}

export interface TeamCountry {
  alpha2: string;
  name:   string;
}

export interface PlayerTeamInfo {
  id: number;
}

export interface Sport {
  name: Name;
  slug: Slug;
  id:   number;
}

export interface Venue {
  city: City
  stadium: Stadium
  id: number
  country: Country
}

export interface City {
  name: string
}

export interface Stadium {
  name: string
  capacity: number
}

export interface Country {
  alpha2: string
  name: string
}

export enum Name {
  Basketball = "Basketball",
  Football = "Football",
  Tennis = "Tennis",
}

export enum Slug {
  Basketball = "basketball",
  Football = "football",
  Tennis = "tennis",
}

export enum CATEGORY_BY_ID {
  TENNIS = 5,
  FOOTBALL = 1,
  BASKETBALL = 2
}

export interface TeamColors {
  primary:   string;
  secondary: string;
  text:      string;
}

export interface Changes {
  changes:         string[];
  changeTimestamp: number;
}

export interface Periods {
  current:   string;
  period1:   string;
  period2:   string;
  period3:   string;
  period4:   string;
  overtime?: string;
  point?:    string;
  period5?:  string;
}

export interface RoundInfo {
  round:        number;
  name:         string;
  cupRoundType: number;
}

export interface Status {
  code:        number;
  description: keyof typeof EVENT_STATUS | string;// string type added because api information insufficient 
  type:        keyof typeof EVENT_STATUS | string;// string type added because api information insufficient 
}

export interface Time {
  injuryTime1?:                number;
  injuryTime2?:                number;
  injuryTime3?:                number;
  injuryTime4?:                number;
  currentPeriodStartTimestamp: number;
  played?:                     number;
  periodLength?:               number;
  overtimeLength?:             number;
  totalPeriodCount?:           number;
}

export interface Tournament {
  name:             string;
  slug:             string;
  category:         Category;
  uniqueTournament: UniqueTournament;
  priority:         number;
  id:               number;
}

export interface Category {
  name:    string;
  slug:    string;
  sport:   Sport;
  id:      number;
  flag:    string;
  alpha2?: string;
}

export interface UniqueTournament {
  name:                        string;
  slug:                        string;
  category:                    Category;
  userCount:                   number;
  crowdsourcingEnabled:        boolean;
  hasPerformanceGraphFeature:  boolean;
  id:                          number;
  hasEventPlayerStatistics:    boolean;
  displayInverseHomeAwayTeams: boolean;
  primaryColorHex?:            string;
  secondaryColorHex?:          string;
  country?:                    string;
  hasBoxScore?:                boolean;
  groundType?:                 string;
}

export enum TENNIS_FLAG  {
  'atp' = 'atp',
  'wta' = 'wta',
  'itf-men' = 'itf',
  'itf-women' = 'itf',
  'challenger' = 'challenger',
  'challenger-women' = 'wta'
}

export enum EVENT_STATUS {
  INPROGRESS = 'inprogress',
  NOT_STARTED = 'Not started',
  FIRST_SET = '1st set',
  FIRST_HALF = '1st half',
  SECOND_HALF = '2nd half',
  CANCELED = 'Canceled',
  WALKOVER = 'Walkover',
  RETIRED = 'Retired',
  SECOND_SET = '2nd set',
  THIRD_SET = '3rd set',
  FOURTH_SET = '4th set',
  FIFTH_SET = '5th set',
  POSTPONED = 'Postponed',
  DELAYED = 'DELAYED',
  AWARDED = 'AWARDED',
  INTERRUPTED = 'Interrupted',
  FIRST_SET_TIEBREAK = 'FIRST_SET_TIEBREAK',
  SECOND_SET_TIEBREAK = 'SECOND_SET_TIEBREAK',
  THIRD_SET_TIEBREAK = 'THIRD_SET_TIEBREAK',
  FOURTH_SET_TIEBREAK = 'FOURTH_SET_TIEBREAK',
  FIFTH_SET_TIEBREAK = 'FIFTH_SET_TIEBREAK',
  AET = 'AET',
  AP = 'AP',
  PAUSE = 'Pause',
  AWAITING_PENALTIES = 'Awaiting penalties',
  PENALTIES = 'Penalties',
  LIVE = 'LIVE',
  PENDING = 'PENDING',
  SUSPENDED = 'Suspended',
  ABANDONED = 'Abandoned',
  FIRST_EXTRA = '1st extra',
  SECOND_EXTRA = '2nd extra',
  EXTRA_TIME_HALFTIME = 'Extra time halftime',
  FINISHED = 'Finished',
  ENDED = 'Ended',
  HALFTIME = 'Halftime',
  FIRST_QUARTER = '1st quarter',
  SECOND_QUARTER = '2nd quarter',
  THIRD_QUARTER = '3rd quarter',
  FOURTH_QUARTER = '4th quarter',
  OVERTIME = 'Overtime',
}

