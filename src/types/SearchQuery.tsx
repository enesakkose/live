export interface Search {
  type:   Type;
  entity: Entity;
  score:  number;
}

export interface Entity {
  name:        string;
  slug:        string;
  shortName:   string;
  gender?:     string;
  sport?:      Sport;
  userCount?:  number;
  nameCode?:   string;
  ranking?:    number;
  disabled?:   boolean;
  national?:   boolean;
  type?:       number;
  id:          number;
  country:     Country;
  subTeams?:   any[];
  teamColors?: TeamColors;
  team?:       Team;
  position?:   string;
  firstName?:  string;
  lastName?:   string;
}

export interface Country {
  alpha2?: string;
  name?:   string;
}

export interface Sport {
  name: SportName;
  slug: Slug;
  id:   number;
}

export enum SportName {
  Football = "Football",
  Tennis = "Tennis",
  Basketball = "Basketball"
}

export enum Slug {
  Football = "football",
  Tennis = "tennis",
  Basketball = "basketball"
}

export interface Team {
  name:       string;
  slug:       string;
  shortName:  string;
  gender?:    string;
  sport:      Sport;
  userCount:  number;
  nameCode:   string;
  disabled?:  boolean;
  national:   boolean;
  type:       number;
  id:         number;
  country:    Country;
  subTeams:   any[];
  teamColors: TeamColors;
}

export interface TeamColors {
  primary:   string;
  secondary: string;
  text:      string;
}

export enum Type {
  Manager = "manager",
  Player = "player",
  Team = "team",
}
