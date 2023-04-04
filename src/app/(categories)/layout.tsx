import React, { ReactNode } from 'react'
import Header from '@/components/Header'
import SportsMenu from '@/components/SportsMenu'
import MainContainer from '@/components/MainContainer'
import Sidebar from '@/components/Sidebar'
import styles from '@/app/(categories)/page.module.scss'

function CategoriesLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <SportsMenu />
      <MainContainer className={styles.container}>
        <main className={styles.sportTimezone}>
          {children}
        </main>
        <Sidebar/>
      </MainContainer>
    </>
  )
}

export default CategoriesLayout
