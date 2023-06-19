import React from 'react'
import Link from 'next/link'
import { TENNISFLAG } from '@/types/Events'
import styles from './Header.module.scss'

type HeaderPropsType = {
  name: string
  countryFlag?: string | null
  uniqueTournamentId: number
  uniqueFlag: string
}

function Header({ name, countryFlag, uniqueFlag, uniqueTournamentId }: HeaderPropsType) {
  const tournamentImgSrc = countryFlag
    ? `https://www.sofascore.com/static/images/flags/${countryFlag}.png`
    : `https://api.sofascore.app/api/v1/unique-tournament/${uniqueTournamentId}/image/dark`
    
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const TOURNAMENTFLAG = TENNISFLAG[uniqueFlag as keyof typeof TENNISFLAG]
    e.currentTarget.src = `https://www.sofascore.com/static/images/flags/${TOURNAMENTFLAG}.png`
  }

  return (
    <div className={styles.eventsHeader}>
      {tournamentImgSrc && (
        <img
          src={tournamentImgSrc}
          width={18}
          height={18}
          alt={name}
          onError={handleImageError}
          loading='lazy'
        />
      )}
      <Link href='/' className={styles.tournamentLink}>
        {name}
      </Link>
    </div>
  )
}

export default Header
