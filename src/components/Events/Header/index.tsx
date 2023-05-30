import React from 'react'
import styles from './Header.module.scss'

type PropsType = {
  tournamentName: string
  tournamentImage?: string | null
}

function Header({ tournamentName, tournamentImage }: PropsType) {
  return (
    <div className={styles.eventsHeader}>
      {tournamentImage && (
          <img
            src={`https://www.sofascore.com/static/images/flags/${tournamentImage}.png`}
            width={20}
            height={20}
            alt={tournamentImage}
            loading='lazy'
          />
      )}
      <h4>{tournamentName}</h4>
    </div>
  )
}

export default Header