import React from 'react'
import MouseFollower from '@/components/MouseFollower'
import ScrollContainer from '@/containers/ScrollContainer'
import { mockSearch } from '@/utils/helpers/mock'
import styles from './QueryResult.module.scss'

function QueryResult() {
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = 'https://www.sofascore.com/static/images/placeholders/player.png'
  }

  return (
    <MouseFollower className={styles.queryResult}>
      <ScrollContainer>
        <ul className={styles.list}>
          {mockSearch.map((result) => (
            <li key={result.entity.id} className={styles.result}>
              <img src={`https://api.sofascore.app/api/v1/team/${result.entity.id}/image`} alt={result.entity.name} loading='lazy' width={40} height={40} onError={handleImageError}/>
              <div className={styles.info}>
                <span className={styles.name}>{result.entity.name}</span>
                <div className={styles.slug}>
                  <img src={`https://www.sofascore.com/static/images/flags/${result.entity.country.alpha2?.toLowerCase()}.png`} width={16} height={16} alt={result.entity.country.name} title={result.entity.country.name} />
                  <span>{result.entity.sport?.name}</span>
                </div>
              </div>
            </li>
          ))}
        </ul>

      </ScrollContainer>
    </MouseFollower>
  )
}

export default QueryResult