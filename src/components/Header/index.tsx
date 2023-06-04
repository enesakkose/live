import React from 'react'
import Search from './Search'
import ActionBtns from './ActionBtns'
import MainContainer from '@/containers/MainContainer'
import BrandLogo from '../BrandLogo'
import styles from './Header.module.scss'

function Header() {
  return (
    <header className={styles.header}>
      <MainContainer className={styles.container}>
        <BrandLogo />
        <Search />
        <ActionBtns />
      </MainContainer>
    </header>
  )
}

export default Header
