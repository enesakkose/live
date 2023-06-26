'use client'
import React from 'react'
import Button from '@/components/UI/Button'
import { useRouter } from 'next/navigation'
import styles from './Header.module.scss'

type PropsType = {
  tournament: string
}

function Header({ tournament }: PropsType) {
  const router = useRouter()

  return (
    <header className={styles.eventHeader}>
      <Button icon='left' onClick={() => router.back()} />
      <h4 className={styles.tournamentName}>{tournament}</h4>
    </header>
  )
}

export default Header
