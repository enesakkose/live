'use client'
import React from 'react'
import MouseFollower from '../MouseFollower'
import NavLink from '../Button/NavLink'
import Icon from '../Icon'
import Button from '../Button'
import ClientOnly from '../ClientOnly'
import { getWindowSize } from '@/utils/helpers/getWindowSize'
import { useSelectedLayoutSegment } from 'next/navigation'
import styles from './BottomNav.module.scss'

function BottomNav() {
  const segment = useSelectedLayoutSegment()
  const SM = getWindowSize('SM')
  const navLinks = [
    { href: '/', active: null, icon: 'soccer', text: 'FOOTBALL' },
    { href: '/basketball', active: 'basketball', icon: 'basket', text: 'BASKETBALL' },
    { href: '/tennis', active: 'tennis', icon: 'tennis', text: 'TENNIS' },
  ]


  return (
    <ClientOnly>
    <MouseFollower className={styles.bottomNav}>
      {navLinks.map((link) => (
        <NavLink
          key={link.text}
          size='xsmall'
          variant='secondary'
          prefetch={false}
          active={segment === link.active}
          href={link.href}
          title={link.text}
        >
          <Icon icon={link.icon} size={25} />
          {!SM && link.text}
        </NavLink>
      ))}
    </MouseFollower>
    </ClientOnly>
  )
}

export default BottomNav
//all nav process will be managed in here