'use client'
import React, { ReactNode } from 'react'
import Header from '@/components/Header'
import SportsMenu from '@/components/SportsMenu'
import MainContainer from '@/containers/MainContainer'
import Sidebar from '@/components/Sidebar'
import styles from '@/app/(categories)/page.module.scss'

function CategoriesLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <SportsMenu />
      <MainContainer className={styles.container}>
        <main className={styles.sportTimezone}>{children}</main>
      </MainContainer>
    </>
  )
}

export default CategoriesLayout
