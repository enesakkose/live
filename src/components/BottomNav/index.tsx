'use client'
import React from 'react'
import MouseFollower from '../MouseFollower'
import NavLink from '../Button/NavLink'
import Icon from '../Icon'
import ClientOnly from '../ClientOnly'
import { useGetWindowSize } from '@/utils/helpers/getWindowSize'
import { useSelectedLayoutSegment } from 'next/navigation'
import styles from './BottomNav.module.scss'

function BottomNav() {
  const segment = useSelectedLayoutSegment()
  const SM = useGetWindowSize('SM')
  const navLinks = [
    { href: '/', active: null, icon: 'soccer', text: 'FOOTBALL' },
    { href: '/basketball', active: 'basketball', icon: 'basket', text: 'BASKETBALL' },
    { href: '/tennis', active: 'tennis', icon: 'tennis', text: 'TENNIS' },
    /*{ href: '/favorites', active: 'favourites', icon: 'bell', text: 'FAVORITES' },*/
  ]

  return (
    <ClientOnly>
    <MouseFollower className={styles.bottomNav}>
      {navLinks.map((link) => (
        <NavLink
          key={link.text}
          variant={SM ? 'tertiary' : 'secondary'}
          active={segment === link.active}
          href={link.href}
          title={link.text}
          className={styles.bottomNavLink}
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