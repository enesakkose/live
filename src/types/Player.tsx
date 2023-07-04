export interface Player {
  player: PlayerItem;
}

interface PlayerItem {
  name: string;
  slug: string;
  shortName: string;
  team: Team;
  position: string;
  jerseyNumber: string;
  height: number;
  preferredFoot: string;
  retired: boolean;
  userCount: number;
  deceased: boolean;
  id: number;
  country: Country2;
  shirtNumber: number;
  dateOfBirthTimestamp: number;
  proposedMarketValue: number;
  proposedMarketValueRaw: ProposedMarketValueRaw;
}

interface ProposedMarketValueRaw {
  value: number;
  currency: string;
}

interface Team {
  name: string;
  slug: string;
  shortName: string;
  gender: string;
  sport: Sport;
  tournament: Tournament;
  primaryUniqueTournament: UniqueTournament;
  userCount: number;
  nameCode: string;
  disabled: boolean;
  national: boolean;
  type: number;
  id: number;
  country: Country2;
  teamColors: TeamColors;
}

interface TeamColors {
  primary: string;
  secondary: string;
  text: string;
}

interface Country2 {
  alpha2: string;
  name: string;
}

interface Tournament {
  name: string;
  slug: string;
  category: Category;
  uniqueTournament: UniqueTournament;
  priority: number;
  id: number;
}

interface UniqueTournament {
  name: string;
  slug: string;
  primaryColorHex: string;
  secondaryColorHex: string;
  category: Category;
  userCount: number;
  id: number;
  country: Country;
  displayInverseHomeAwayTeams: boolean;
}

interface Country {
}

interface Category {
  name: string;
  slug: string;
  sport: Sport;
  id: number;
  flag: string;
  alpha2: string;
}

interface Sport {
  name: string;
  slug: string;
  id: number;
}
