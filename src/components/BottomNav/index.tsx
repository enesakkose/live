"use client"
import React from 'react'
import MouseFollower from '../MouseFollower'
import NavLink from '../Button/NavLink'
import Icon from '../Icon'
import Button from '../Button'
import { useSelectedLayoutSegment } from 'next/navigation'
import styles from './BottomNav.module.scss'

function BottomNav() {
  const segment = useSelectedLayoutSegment()

  return (
    <MouseFollower className={styles.bottomNav}>
      <NavLink size='xsmall' variant='secondary' prefetch={false} active={segment === null || segment === 'index'} href='/'>
        <Icon icon='soccer' size={25} />
        FOOTBALL
      </NavLink>
      <NavLink size='xsmall' variant='secondary' prefetch={false} active={segment === 'basketball'} href='/basketball'>
        <Icon icon='basket' size={25} />
        BASKETBALL
      </NavLink>
      <NavLink size='xsmall' variant='secondary' prefetch={false} active={segment === 'tennis'} href='/tennis'>
        <Icon icon='tennis' size={25} />
        TENNIS
      </NavLink>
      <Button variant='icon' icon='star'/>
      <Button variant='icon' icon='gear'/>
    </MouseFollower>
  )
}

export default BottomNav
