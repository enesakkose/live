import styles from '@/app/(categories)/page.module.scss'
import Timezone from '@/components/Timezone'
import TournamentContent from '@/components/Events/Content'

export default function Home() {
  
  return (
    <>
      <Timezone/>
      <TournamentContent id={1}/>
    </>
  )
}
