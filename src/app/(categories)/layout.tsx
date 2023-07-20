import React from 'react'
import Header from '@/components/Header'
import MainContainer from '@/containers/MainContainer'
import BottomNav from '@/components/BottomNav'
import Timezone from '@/components/Events/Timezone'
import styles from './layout.module.scss'

function CategoriesLayout({ children }: { children: React.ReactNode }) {
  return (
    <MainContainer className={styles.container}>
      <Header />
      <main className={styles.sportTimezone}>
        <Timezone />
        {children}
        <BottomNav />
      </main>
    </MainContainer>
  )
}

export default CategoriesLayout
