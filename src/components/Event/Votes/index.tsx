'use client'
import React from 'react'
import clsx from 'clsx'
import Loading from './loading'
import { getConvertedPercent } from '@/utils/helpers'
import { useGetEventVotes } from '@/services/sportsv2'
import styles from './Votes.module.scss'

type VotesPropsType = { eventId: number }

function Votes({ eventId }: VotesPropsType) {
  const { data: votes, isLoading, isError } = useGetEventVotes(eventId)
  if (isLoading) return <Loading />
  if(isError) return null
  const totalVotes = votes.vote1 + votes.vote2 + (votes?.voteX ? votes.voteX : 0)
  const homeVotesPercent = getConvertedPercent(votes.vote1, totalVotes)
  const awayVotesPercent = getConvertedPercent(votes.vote2, totalVotes)
  const xVotesPercent = getConvertedPercent(votes.voteX, totalVotes)
  const voteNumbers = Object.entries(votes).map(([key, value]) => value)

  return (
    <div className={styles.votes}>
      <span className={styles.title}>Who will win?</span>
      <div className={styles.voteNumbers}>
        {voteNumbers.map((number) => (
          <span key={number}>{number}</span>
        ))}
      </div>
      <div className={styles.votePercents}>
        <div
          className={clsx(styles.votePercent, styles.homeVotePercent)}
          style={{ width: `${homeVotesPercent}%` }}
        >
          <span className={styles.percent}>{Math.round(homeVotesPercent)}%</span>
        </div>
        {votes.voteX ? 
          <div
            className={clsx(styles.votePercent, styles.xVotePercent)}
            style={{ width: `${xVotesPercent}%` }}
          >
            <span className={styles.percent}>{Math.round(xVotesPercent)}%</span>
          </div> 
        : null}
        <div
          className={clsx(styles.votePercent, styles.awayVotePercent)}
          style={{ width: `${awayVotesPercent}%` }}
        >
          <span className={styles.percent}>{Math.round(awayVotesPercent)}%</span>
        </div>
      </div>
    </div>
  )
}

export default Votes
