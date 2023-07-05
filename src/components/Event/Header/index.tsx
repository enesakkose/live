'use client'
import React from 'react'
import Button from '@/components/UI/Button'
import TournamentFlag from '@/components/TournamentFlag'
import { useRouter } from 'next/navigation'
import { CATEGORY_BY_ID, type Tournament } from '@/types/Events'
import styles from './Header.module.scss'

type PropsType = { tournament: Tournament }

function Header({ tournament }: PropsType) {
  const router = useRouter()
  const BACK_ROUTE = tournament.category.sport.id === CATEGORY_BY_ID.FOOTBALL 
    ? '/' 
    : `/${tournament.category.sport.name.toLowerCase()}`

  return (
    <header className={styles.eventHeader}>
      <Button icon='left' onClick={() => router.push(BACK_ROUTE)} />
      <TournamentFlag
        countryFlag={tournament.category.alpha2?.toLowerCase()}
        uniqueFlag={tournament.category?.flag}
        uniqueTournamentId={tournament.uniqueTournament?.id}
        categoryTennis={tournament.category.sport.id === CATEGORY_BY_ID.TENNIS}
        width={20}
        height={20}
        alt={tournament.name}
      />
      <h4 className={styles.tournamentName}>{tournament.name}</h4>
    </header>
  )
}

export default Header
