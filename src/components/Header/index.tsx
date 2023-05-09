import React from 'react'
import Search from '../Header/Search'
import MainContainer from '@/containers/MainContainer'
import BrandLogo from '../BrandLogo'
import styles from './Header.module.scss'

function Header() {
  return (
    <header className={styles.header}>
      <MainContainer className={styles.container}>
        <BrandLogo/>
        <Search />
      </MainContainer>
    </header>
  )
}

export default Header
