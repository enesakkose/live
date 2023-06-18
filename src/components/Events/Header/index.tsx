import React from 'react'
import Link from 'next/link'
import styles from './Header.module.scss'

type HeaderPropsType = {
  tournamentName: string
  tournamentImage?: string | null
  uniqueTournamentId: number
}

function Header({ tournamentName, tournamentImage, uniqueTournamentId }: HeaderPropsType) {
  const tournamentImgSrc = tournamentImage 
    ? `https://www.sofascore.com/static/images/flags/${tournamentImage}.png` 
    : `https://api.sofascore.app/api/v1/unique-tournament/${uniqueTournamentId}/image/dark`

  return (
    <div className={styles.eventsHeader}>
      {tournamentImgSrc &&
        <img
          src={tournamentImgSrc}
          width={18}
          height={18}
          alt={tournamentName}
          loading='lazy'
        />
      }
      <Link href='/' className={styles.tournamentLink}>
        {tournamentName}
      </Link>
    </div>
  )
}

export default Header
