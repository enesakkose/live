export interface BestPlayer {
  bestHomeTeamPlayer: BestTeamPlayer
  bestAwayTeamPlayer: BestTeamPlayer
}

export interface BestTeamPlayer {
  value: string
  label: string
  player: Player
}

export interface Player {
  name: string
  firstName: string
  lastName: string
  slug: string
  shortName: string
  position: string
  userCount: number
  id: number
  marketValueCurrency: string
  dateOfBirthTimestamp: number
}