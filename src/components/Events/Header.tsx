import React from 'react'
import Image from 'next/image'
import styles from '@/components/Events/Header.module.scss'

type PropsType = {
  tournamentName: string
  tournamentImage?: string | null
}

function Header({ tournamentName, tournamentImage }: PropsType) {
  return (
    <div className={styles.eventsHeader}>
      {tournamentImage && (
        <Image
          src={tournamentImage}
          width={25}
          height={25}
          alt={tournamentName}
        />
      )}
      <h5>{tournamentName}</h5>
    </div>
  )
}

export default Header
