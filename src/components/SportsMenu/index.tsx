'use client'
import React from 'react'
import Button from '@/components/Button'
import MainContainer from '@/containers/MainContainer'
import { useSelectedLayoutSegment } from 'next/navigation'
import { useRouter } from 'next/router'
import Icon from '@/components/Icon'
import Link from 'next/link'
import styles from '@/components/SportsMenu/SportsMenu.module.scss'

function SportsMenu() {
  const active = useSelectedLayoutSegment()

  return (
    <div className={styles.sportsMenu}>
      <MainContainer className={styles.container}>
        <Button prefetch={false} active={active === null} href='/'>
          <Icon icon='soccer' size={30} />
          FOOTBALL
        </Button>
        <Button prefetch={false} active={active === 'basketball'} href='/basketball'>
          <Icon icon='basket' size={30} />
          BASKETBALL
        </Button>
        <Button prefetch={false} active={active === 'tennis'} href='/tennis'>
          <Icon icon='tennis' size={30} />
          TENNIS
        </Button>
      </MainContainer>
    </div>
  )
}

export default SportsMenu
