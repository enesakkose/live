import React from 'react'
import { TENNIS_FLAG } from '@/types/Events'

type TournamenFlagPropsType = {
  countryFlag?: string | null
  uniqueTournamentId: number
  uniqueFlag: string
  categoryTennis: boolean
} & React.ComponentPropsWithoutRef<"img">

function TournamentFlag({
  countryFlag,
  uniqueFlag,
  uniqueTournamentId,
  categoryTennis,
  ...props
}: TournamenFlagPropsType) {
  const TENNIS_TOURNAMENT_FLAG = TENNIS_FLAG[uniqueFlag as keyof typeof TENNIS_FLAG] ?? uniqueFlag
  const tournamentImgSrc = countryFlag
    ? `https://www.sofascore.com/static/images/flags/${countryFlag}.png`
    : categoryTennis
      ? `https://www.sofascore.com/static/images/flags/${TENNIS_TOURNAMENT_FLAG}.png`
      : `https://api.sofascore.app/api/v1/unique-tournament/${uniqueTournamentId}/image/dark`

  return <>{tournamentImgSrc ? <img src={tournamentImgSrc} {...props} /> : null}</>
}

export default TournamentFlag
