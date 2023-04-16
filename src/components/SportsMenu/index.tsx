'use client'
import React from 'react'
import MainContainer from '@/containers/MainContainer'
import Icon from '@/components/Icon'
import NavLink from '../Button/NavLink'
import { useSelectedLayoutSegment } from 'next/navigation'
import styles from './SportsMenu.module.scss'

function SportsMenu() {
  const segment = useSelectedLayoutSegment()

  return (
    <div className={styles.sportsMenu}>
      <MainContainer className={styles.container}>
        <NavLink prefetch={false} active={segment === null} href='/'>
          <Icon icon='soccer' size={30} />
          FOOTBALL
        </NavLink>
        <NavLink prefetch={false} active={segment === 'basketball'} href='/basketball'>
          <Icon icon='basket' size={30} />
          BASKETBALL
        </NavLink>
        <NavLink prefetch={false} active={segment === 'tennis'} href='/tennis'>
          <Icon icon='tennis' size={30} />
          TENNIS
        </NavLink>
      </MainContainer>
    </div>
  )
}

export default SportsMenu
