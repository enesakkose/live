import React from 'react'
import RoundedImg from '@/components/RoundedImg'
import styles from './Header.module.scss'

type PropsType = {
  tournamentName: string
  tournamentImage?: string | null
}

function Header({ tournamentName, tournamentImage }: PropsType) {

  return (
    <div className={styles.eventsHeader}>
      {tournamentImage && (
        <RoundedImg width={25} height={25}>
          <img
            src={tournamentImage}
            width={20}
            height={20}
            alt={''}
          />
        </RoundedImg>
      )}
      <h4>{tournamentName}</h4>
    </div>
  )
}

export default Header
