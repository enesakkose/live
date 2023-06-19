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
  country:         AwayTeamCountry;
  subTeams:        any[];
  teamColors:      TeamColors;
  gender?:         string;
  nameCode?:       string;
  national?:       boolean;
  playerTeamInfo?: PlayerTeamInfo;
}

export interface AwayTeamCountry {
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
  description: string;
  type:        string;
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

export enum TENNISFLAG  {
  'atp' = 'atp',
  'wta' = 'wta',
  'itf-men' = 'itf',
  'itf-women' = 'itf',
  'challenger' = 'challenger',
  'challenger-women' = 'wta'
}