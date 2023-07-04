import React from 'react'
import Content from './Content'
import { Tooltip, TooltipTrigger, TooltipContent } from '../UI/Tooltip'
import styles from './PlayerTooltip.module.scss'

type PlayerTooltipPropsType = {
  playerId: number
  playerName: string
}

function PlayerTooltip({ playerId, playerName }: PlayerTooltipPropsType) {
  return (
    <Tooltip className={styles.playerTooltip}>
      <TooltipTrigger variant='underline'>{playerName}</TooltipTrigger>
      <TooltipContent className={styles.playerTooltipContent}>
        <Content playerId={playerId}/>
      </TooltipContent>
    </Tooltip>
  )
}

export default PlayerTooltip
