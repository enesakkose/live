import React from 'react'
import Link from 'next/link'
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
          width={16}
          height={16}
          alt={tournamentImage}
          loading='lazy'
        />
      )}
      <Link href='/' className={styles.tournamentLink}>
        {tournamentName}
      </Link>
    </div>
  )
}

export default Header
