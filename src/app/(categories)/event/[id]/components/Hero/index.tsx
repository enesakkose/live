import React from 'react'
import clsx from 'clsx'
import Image from 'next/image'
import RoundedImg from '@/components/RoundedImg'
import { Josefin_Sans } from 'next/font/google'
import styles from './Hero.module.scss'

const josefin = Josefin_Sans({
  variable: '--font-josefin',
  subsets: ['latin'],
})


function EventTeam() {
  return (
    <div className={styles.eventTeam}>
      <RoundedImg width={144} height={144}>
        <Image
          src='https://www.flashscore.com/res/image/data/tSfwGCdM-KKWyfaNo.png'
          alt='team'
          width={120}
          height={120}
        />
      </RoundedImg>

      <h5>Djokovic N. (Srb)</h5>
    </div>
  )
}

function Hero() {
  return (
    <div className={styles.eventHero}>
      <div className={styles.eventInfo}>
        <EventTeam />
        <div className={styles.eventStatement}>
          <span>27/11/2021</span>
          <div className={clsx(styles.eventCurrentScore, josefin.variable)}>
            <span>2</span>
            <span>-</span>
            <span>0</span>
          </div>
          <span>77</span>
        </div>
        <EventTeam />
      </div>
    </div>
  )
}

export default Hero
