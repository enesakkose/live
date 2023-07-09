"use client"
import React from 'react'
import clsx from 'clsx'
import Rating from '@/components/Rating'
import Loading from './loading'
import { useGetBestPlayers } from '@/services/sportsv2'
import { type BestTeamPlayer } from '@/types/EventBestPlayer'
import styles from './BestPlayers.module.scss'

type BestPlayerPropsType = {
  bestPlayer: BestTeamPlayer | any //any specified for api type issue
  className?: string
}

function BestPlayer({ bestPlayer, className }: BestPlayerPropsType) {
  return (
    <div className={clsx(styles.bestPlayer, className)}>
      <img
        src={`https://api.sofascore.app/api/v1/player/${bestPlayer.player.id}/image`}
        alt={bestPlayer.player.name}
        width={44}
        height={44}
      />
      <div className={styles.playerInfo}>
        <Rating
          className={styles.rating}
          rating={Number(bestPlayer.value)}
        />
        <span className={styles.playerName}>{bestPlayer.player.shortName}</span>
      </div>
    </div>
  )
}

function BestPlayers({ eventId } : { eventId: number }) {
  const { data: bestPlayers, isLoading, isError } = useGetBestPlayers(eventId)
  
  if(isLoading) return <Loading/>
  if(isError || !bestPlayers.bestHomeTeamPlayer) return null

  return (
    <div className={styles.bestPlayers}>
      <BestPlayer bestPlayer={bestPlayers.bestHomeTeamPlayer}/>
      <span className={styles.title}>Ratings</span>
      <BestPlayer bestPlayer={bestPlayers.bestAwayTeamPlayer} className={styles.bestAwayPlayer}/>
    </div>
  )
}

export default BestPlayers
