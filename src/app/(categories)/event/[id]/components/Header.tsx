import React from 'react'
import BackBtn from '@/components/IconButtons/BackBtn'
import Image from 'next/image'
import styles from '@/app/(categories)/event/[id]/components/Header.module.scss'

function Header() {
  return (
    <header className={styles.eventHeader}>
      <BackBtn/>
      <Image src='https://www.flashscore.com/res/image/data/S2yeTiRp-QTqAbX0O.png' alt='logo' width={30} height={30} />
      <h4>Wimbledon ATP, grass</h4>
    </header>
  )
}

export default Header