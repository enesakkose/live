import React from 'react'
import Image from 'next/image'
import RoundedImg from '@/components/RoundedImg'
import styles from '@/components/Events/Header.module.scss'

type PropsType = {
  tournamentName: string
  tournamentImage?: string | null
}

function Header({ tournamentName, tournamentImage }: PropsType) {
  return (
    <div className={styles.eventsHeader}>
      {tournamentImage && (
        <RoundedImg width={25} height={25}>
          <Image
            src={tournamentImage}
            width={20}
            height={20}
            alt={tournamentName}
          />
        </RoundedImg>
      )}
      <h5>{tournamentName}</h5>
    </div>
  )
}

export default Header
