"use client"

import RoundedImg from '@/components/RoundedImg'
import React from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Button from '@/components/Button'
import styles from '@/app/(categories)/event/[id]/components/Header.module.scss'

function Header() {
  const router = useRouter()

  return (
    <header className={styles.eventHeader}>
      <Button icon='left' onClick={() => router.back()} />
      <RoundedImg width={30} height={30}>
      <Image
        src='https://www.flashscore.com/res/image/data/S2yeTiRp-QTqAbX0O.png'
        alt='logo'
        width={30}
        height={30}
      />
      </RoundedImg>
      <h4>Wimbledon ATP, grass</h4>
    </header>
  )
}

export default Header
