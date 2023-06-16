import React from 'react'
import Search from './Search'
import ActionBtns from './ActionBtns'
import Avatar from '../Avatar'
import BrandLogo from '../BrandLogo'
import styles from './Header.module.scss'

function Header() {
  return (
    <header className={styles.header}>
      <BrandLogo />
      <Search />
      <Avatar />
    </header>
  )
}

export default Header
