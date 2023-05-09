import React from 'react'
import Score from './Score'
import PlayerStats from './PlayerStats/PlayerStats'

function Basketball({ eventId = 'x44PNpvj' }: { eventId: string }) {
  return (
    <>
      <Score />
      <PlayerStats eventId={eventId} />
    </>
  )
}

export default Basketball
