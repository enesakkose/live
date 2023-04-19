'use client'
import RoundedImg from '@/components/RoundedImg'
import React from 'react'
import Image from 'next/image'
import Button from '@/components/Button'
import { useRouter } from 'next/navigation'
import type { Tournament } from '@/types/event.types'
import styles from './Header.module.scss'

type PropsType = {
  tournament: Tournament
}

function Header({ tournament }: PropsType) {
  const router = useRouter()

  return (
    <header className={styles.eventHeader}>
      <Button icon='left' onClick={() => router.back()} />
      <RoundedImg width={30} height={30}>
        <Image
          src={tournament.TOURNAMENT_IMAGE}
          alt={tournament.NAME}
          width={25}
          height={25}
        />
      </RoundedImg>
      <h4>{tournament?.NAME}</h4>
    </header>
  )
}

export default Header
