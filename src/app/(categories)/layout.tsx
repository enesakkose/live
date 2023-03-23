import React, { ReactNode } from 'react'
import Header from '@/components/Header'
import SportsMenu from '@/components/SportsMenu'
import MainContainer from '@/components/MainContainer'
import Timezone from '@/components/Timezone'
import Sidebar from '@/components/Sidebar'
import styles from '@/app/(categories)/Layout.module.scss'

function CategoriesLayout({ children }: { children: ReactNode }) {
  return (
    <main className={styles.categoriesLayout}>
      <Header />
      <SportsMenu />
      <MainContainer className={styles.container}>
        <div className={styles.sportTimezone}>
          <Timezone />
          {children}
        </div>
        <Sidebar/>
      </MainContainer>
    </main>
  )
}

export default CategoriesLayout
