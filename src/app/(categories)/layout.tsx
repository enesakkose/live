import React, { ReactNode } from 'react'
import Header from '@/components/Header'
import MainContainer from '@/containers/MainContainer'
import BottomNav from '@/components/BottomNav'
import styles from './l.module.scss'

function CategoriesLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <MainContainer className={styles.container}>
        <main className={styles.sportTimezone}>
          {children}
          <BottomNav />
        </main>
      </MainContainer>
    </>
  )
}

export default CategoriesLayout
