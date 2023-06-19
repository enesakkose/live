import React from 'react'
import Link from 'next/link'
import { TENNISFLAG } from '@/types/Events'
import styles from './Header.module.scss'

type HeaderPropsType = {
  name: string
  countryFlag?: string | null
  uniqueTournamentId: number
  uniqueFlag: string
  categoryTennis: boolean
}

function Header({ name, countryFlag, uniqueFlag, uniqueTournamentId, categoryTennis }: HeaderPropsType) {
  const TENNISTOURNAMENTFLAG = TENNISFLAG[uniqueFlag as keyof typeof TENNISFLAG] ?? uniqueFlag
  const tournamentImgSrc = countryFlag
    ? `https://www.sofascore.com/static/images/flags/${countryFlag}.png`
    : categoryTennis
      ? `https://www.sofascore.com/static/images/flags/${TENNISTOURNAMENTFLAG}.png`
      : `https://api.sofascore.app/api/v1/unique-tournament/${uniqueTournamentId}/image/dark`


  return (
    <div className={styles.eventsHeader}>
      {tournamentImgSrc && (
        <img
          src={tournamentImgSrc}
          width={18}
          height={18}
          alt={name}
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
