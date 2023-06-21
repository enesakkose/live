import React from 'react'
import { type Search } from '@/types/SearchQuery'
import styles from './Row.module.scss'

enum QUERYTYPES {
  uniqueTournament = 'unique-tournament',
  team = 'team',
  player = 'player',
  manager = 'manager',
  referee = 'referee'
}

function Row({ result }: { result: Search }) {
  const resultInfoByType = [
    {
      type: 'player',
      src: `${result.entity.country.alpha2?.toLowerCase()}`,
      category: `${result.entity.team?.sport?.name}`,
    },
    {
      type: 'manager',
      src: `${result.entity.country.alpha2?.toLowerCase()}`,
      category: `${result.entity.team?.sport?.name}`,
    },
    {
      type: 'referee',
      src: `${result.entity.country.alpha2?.toLowerCase()}`,
      category: `${result.entity.sport?.name}`,
    },
    {
      type: 'team',
      src: `${result.entity.country?.alpha2?.toLowerCase()}`,
      category: `${result.entity.sport?.name}`,
    },
    {
      type: 'uniqueTournament',
      src: `${result.entity.category?.alpha2?.toLowerCase() ?? 'international'}`,
      category: `${result.entity.category?.sport?.name}`,
    },
  ]
  const findedInfo = resultInfoByType.find((info) => info.type === result.type)
  const imgType = QUERYTYPES[result.type as keyof typeof QUERYTYPES]

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = 'https://www.sofascore.com/static/images/placeholders/player.png'
  }

  return (
    <li className={styles.result}>
      <img
        src={`https://api.sofascore.app/api/v1/${imgType}/${result.entity.id}/image`}
        alt={result.entity.name}
        loading='lazy'
        width={44}
        height={44}
        onError={handleImageError}
      />
      <div className={styles.info}>
        <span className={styles.name}>{result.entity.name}</span>
        <div className={styles.slug}>
          <img
            src={`https://www.sofascore.com/static/images/flags/${findedInfo?.src}.png`}
            width={16}
            height={16}
            alt={result.entity.country.name}
            title={result.entity.country.name}
          />
          <span>{findedInfo?.category}</span>
        </div>
      </div>
    </li>
  )
}

export default Row
