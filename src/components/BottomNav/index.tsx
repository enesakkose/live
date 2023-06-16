'use client'
import React from 'react'
import MouseFollower from '../MouseFollower'
import NavLink from '../UI/NavLink'
import Icon from '../UI/Icon'
import ClientOnly from '../ClientOnly'
import { useGetWindowSize } from '@/utils/helpers/getWindowSize'
import { usePathname } from 'next/navigation'
import { type IconNameType } from '../UI/Icon'
import styles from './BottomNav.module.scss'

function BottomNav() {
  const pathname = usePathname()
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
            active={pathname === link.href}
            href={link.href}
          >
            <Icon icon={link.icon as IconNameType} size={25} />
            {!SM && link.text}
          </NavLink>
        ))}
      </MouseFollower>
    </ClientOnly>
  )
}

export default BottomNav
