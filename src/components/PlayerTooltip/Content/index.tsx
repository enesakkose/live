import React from 'react'
import clsx from 'clsx'
import Section from '@/components/Event/Incidents/Section'
import Loading from '@/components/Loading'
import Error from '@/components/Error'
import { useGetPlayerData } from '@/services/sportsv2'
import { getFormatNumber } from '@/utils/helpers/getFormatNumber'
import { getConvertDaysToAge } from '@/utils/helpers/getFormatTime'
import styles from './Content.module.scss'

type PlayerTooltipContenPropsType = { playerId: number }

function Content({ playerId }: PlayerTooltipContenPropsType) {
  const { data: player, isLoading, isError } = useGetPlayerData(playerId)
  if (isLoading || !player) return <Loading />
  if (isError) return <Error error='Something went wrong.' />
  const playerInfo = [
    {
      title: 'Age',
      content: (
        <span className={styles.content}>
          {getConvertDaysToAge(player.dateOfBirthTimestamp)}
        </span>
      ),
    },
    {
      title: 'Foot',
      content: <span className={styles.content}>{player.preferredFoot}</span>,
    },
    {
      title: 'Height',
      content: <span className={styles.content}>{player.height}</span>,
    },
    {
      title: 'Position',
      content: <span className={styles.content}>{player.position}</span>,
    },
    {
      title: 'Team',
      content: (
        <img
          className={styles.teamImg}
          src={`https://api.sofascore.app/api/v1/team/${player.team.id}/image`}
          alt={player.team.name}
          title={player.team.name}
          width={20}
          height={20}
        />
      ),
    },
    {
      title: 'Value',
      content: (
        <span className={clsx(styles.content, styles.marketValue)}>
          {`${getFormatNumber(player.proposedMarketValue)}€`}
        </span>
      ),
    },
  ]

  return (
    <>
      <Section title={player.shortName}>
        <img
          src={`https://www.sofascore.com/static/images/flags/${player.country?.alpha2?.toLowerCase()}.png`}
          alt={player.country.name}
          width={20}
          height={20}
        />
      </Section>
      <div className={styles.player}>
        <div className={styles.personalInfo}>
          <img
            src={`https://api.sofascore.app/api/v1/player/${playerId}/image`}
            alt={player.shortName}
            width={48}
            height={48}
          />
          <div className={styles.infos}>
            {playerInfo.map((info) => (
              <div key={info.title} className={styles.info}>
                <span className={styles.title}>{info.title}</span> 
                <br/>
                {info.content ?? '-'}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Content
