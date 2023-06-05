import React, { ReactNode } from 'react'
import Header from '@/components/Header'
import MainContainer from '@/containers/MainContainer'
import BottomNav from '@/components/BottomNav'
import styles from './layout.module.scss'

function CategoriesLayout({ children }: { children: ReactNode }) {
  return (
    <MainContainer className={styles.container}>
      <Header />
      <main className={styles.sportTimezone}>
        {children}
        <BottomNav />
      </main>
    </MainContainer>
  )
}

export default CategoriesLayout
