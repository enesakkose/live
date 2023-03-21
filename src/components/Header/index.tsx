import React from 'react'
import Search from '@/components/Header/Search'
import ActionBtns from '@/components/Header/ActionBtns'
import MainContainer from '@/components/MainContainer'
import styles from '@/components/Header/Header.module.scss'

function Header() {
  return (
    <header className={styles.header}>
      <MainContainer className={styles.container}>
        <h2>SScore</h2>
        <Search />
        <ActionBtns />
      </MainContainer>
    </header>
  )
}

export default Header
