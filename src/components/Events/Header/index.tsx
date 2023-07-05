import React from 'react'
import Link from 'next/link'
import TournamentFlag from '@/components/TournamentFlag'
import styles from './Header.module.scss'

type HeaderPropsType = {
  name: string
  countryFlag?: string | null
  uniqueTournamentId: number
  uniqueFlag: string
  categoryTennis: boolean
}

function Header({
  name,
  countryFlag,
  uniqueFlag,
  uniqueTournamentId,
  categoryTennis,
}: HeaderPropsType) {
  return (
    <div className={styles.eventsHeader}>
      <TournamentFlag
        countryFlag={countryFlag}
        uniqueFlag={uniqueFlag}
        uniqueTournamentId={uniqueTournamentId}
        categoryTennis={categoryTennis}
        width={18}
        height={18}
        alt={name}
        loading='lazy'
      />
      <Link href='/' className={styles.tournamentLink}>{name}</Link>
    </div>
  )
}

export default Header
