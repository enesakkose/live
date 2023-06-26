import React from 'react'
import clsx from 'clsx'
import styles from './TennisPlayerRank.module.scss'

type TennisPlayerRankPropsType = {
  gender: string | undefined
  rank: number | undefined
  className?: string
}

enum TENNISLEAGUE {
  W = 'WTA',
  M = 'ATP'
}

function TennisPlayerRank({ gender, rank, className }: TennisPlayerRankPropsType) {
  const rankByGender = gender === 'W' 
    ? `${TENNISLEAGUE.W}: ${rank}.` 
    : `${TENNISLEAGUE.M}: ${rank}.`

  return (
    <span className={clsx(styles.rank, className)}>{rankByGender}</span>
  )
}

export default TennisPlayerRank
